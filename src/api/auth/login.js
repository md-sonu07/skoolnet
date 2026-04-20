import api from '../axios';

export const login = (credentials) => api.post('/accounts/login/', credentials);

export default login;