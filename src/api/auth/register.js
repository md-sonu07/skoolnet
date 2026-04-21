import api from '../axios';

export const register = (userData) => api.post('/accounts/register', userData);

export default register;