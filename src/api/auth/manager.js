import api from './axios';

export const managerAuthAPI = {
  login: (credentials) => api.post('/auth/login/', credentials),
  
  register: (userData) => api.post('/auth/', {
    ...userData,
    role: 'MANAGER',
  }),
  
  logout: () => api.post('/auth/logout/'),
  
  getProfile: () => api.get('/auth/profile/'),
  
  updateProfile: (data) => api.patch('/auth/profile/', data),
  
  changePassword: (data) => api.post('/auth/change-password/', data),
};

export default managerAuthAPI;