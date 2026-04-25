import api from '../axios';

export const getProfile = () => api.get('/accounts/partner/profile');

export const updateProfile = (data) => api.patch('/accounts/partner/profile', data);

export const changePassword = (data) => api.post('/accounts/password', data);

export default { getProfile, updateProfile, changePassword };