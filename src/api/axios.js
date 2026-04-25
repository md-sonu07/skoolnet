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
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await axios.post(
            `${API_BASE}/accounts/refresh`,
            { refresh: refreshToken }
          );
          
          const { access, refresh, user } = response.data;
          
          // Update localStorage
          localStorage.setItem('access_token', access);
          localStorage.setItem('refresh_token', refresh);
          
          // Update Redux state to prevent stale token reuse in subsequent requests
          // We update the primary 'auth' slice which is used by institutions/schools
          store.dispatch(setCredentials({ access, refresh, user }));
          
          // Retry the original request with the new token
          originalRequest.headers.Authorization = `Bearer ${access}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, clear tokens and redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        
        // Redirect to a sensible default or the specific login page
        // Use local variable to avoid unnecessary re-renders if in a component context
        if (!window.location.pathname.includes('/auth/')) {
          window.location.href = '/auth/institution/login';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export { BASE_URL, API_VERSION, API_BASE };
export default api;