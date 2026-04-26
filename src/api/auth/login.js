import api from '../axios';

export const login = (credentials) => api.post('/accounts/login', credentials);
export const loginSchool = (credentials) => api.post('/accounts/auth/school/login', credentials);
export const loginCoaching = (credentials) => api.post('/accounts/auth/coaching/login', credentials);

export default login;