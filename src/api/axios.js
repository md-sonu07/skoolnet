import axios from 'axios';
import store from '../redux/store/store';

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
      // Attempt to get token from Redux store first, then localStorage
      const state = store.getState();
      const token = state.managerAuth?.token || state.partnerAuth?.token || state.auth?.token || localStorage.getItem('access_token');
      
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
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await axios.post(
            `${API_BASE}/accounts/refresh`,
            { refresh: refreshToken }
          );
          
          const { access, refresh } = response.data;
          localStorage.setItem('access_token', access);
          localStorage.setItem('refresh_token', refresh);
          
          originalRequest.headers.Authorization = `Bearer ${access}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Redirect to a sensible default or the specific login page
        window.location.href = '/auth/partner/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export { BASE_URL, API_VERSION, API_BASE };
export default api;