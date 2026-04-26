import api from '../axios';

export const signup = (data) => api.post('/accounts/signup', data);

export default signup;
