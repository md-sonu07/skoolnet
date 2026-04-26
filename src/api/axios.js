import axios from 'axios';
import store from '../redux/store/store';
import { setCredentials } from '../redux/slice/authSlice';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const API_VERSION = 'v1';
const API_BASE = `${BASE_URL}/api/${API_VERSION}`;

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    // List of public endpoints that don't need the Authorization header
    const publicEndpoints = [
      '/accounts/login',
      '/accounts/register',
      '/accounts/refresh',
      '/accounts/verify-email',
      '/accounts/password-reset',
      '/institutions',
    ];

    const isPublicEndpoint = publicEndpoints.some(endpoint => config.url.includes(endpoint));

    if (!isPublicEndpoint) {
      const state = store.getState();
      // Try to find any active token in order of priority
      const token = state.managerAuth?.token || 
                    state.partnerAuth?.token || 
                    state.auth?.token || 
                    localStorage.getItem('access_token');
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Handle 401 Unauthorized errors - attempt token refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const state = store.getState();
        // Determine which refresh token to use and which slice to update
        let refreshToken = null;
        let updateAction = null;
        let loginPath = '/auth/institution/login';

        if (state.managerAuth?.token) {
          refreshToken = localStorage.getItem('manager_refresh_token');
          updateAction = (data) => store.dispatch({ type: 'managerAuth/setCredentials', payload: data });
          loginPath = '/auth/manager/login';
        } else if (state.partnerAuth?.token) {
          refreshToken = localStorage.getItem('partner_refresh_token');
          updateAction = (data) => store.dispatch({ type: 'partnerAuth/setCredentials', payload: data });
          loginPath = '/auth/partner/login';
        } else {
          refreshToken = localStorage.getItem('refresh_token');
          updateAction = (data) => store.dispatch(setCredentials(data));
        }
        
        if (refreshToken) {
          const response = await axios.post(
            `${API_BASE}/accounts/refresh`,
            { refresh: refreshToken }
          );
          
          const { access, refresh, user } = response.data;
          
          // Update role-specific storage
          if (state.managerAuth?.token) {
            localStorage.setItem('manager_access_token', access);
            localStorage.setItem('manager_refresh_token', refresh);
          } else if (state.partnerAuth?.token) {
            localStorage.setItem('partner_access_token', access);
            localStorage.setItem('partner_refresh_token', refresh);
          } else {
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
          }
          
          // Update Redux state
          updateAction({ access, refresh, user });
          
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${access}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear all tokens and redirect to correct login
        const keys = [
          'access_token', 'refresh_token', 'user',
          'manager_access_token', 'manager_refresh_token', 'manager_user',
          'partner_access_token', 'partner_refresh_token', 'partner_user'
        ];
        keys.forEach(key => localStorage.removeItem(key));
        
        // Also clear Redux state for all roles
        store.dispatch({ type: 'auth/logout' });
        store.dispatch({ type: 'managerAuth/logout' });
        store.dispatch({ type: 'partnerAuth/logout' });

        if (!window.location.pathname.includes('/auth/')) {
          // Determine where to redirect based on the current URL
          let redirectPath = '/auth/institution/login';
          if (window.location.pathname.includes('/manager')) redirectPath = '/auth/manager/login';
          else if (window.location.pathname.includes('/partner')) redirectPath = '/auth/partner/login';
          
          window.location.href = redirectPath;
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export { BASE_URL, API_VERSION, API_BASE };
export default api;