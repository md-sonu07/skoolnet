import api from '../axios';

export const logout = () => {
  const refreshToken = localStorage.getItem('refresh_token');
  return api.post('/accounts/logout/', { refresh: refreshToken });
};

export default logout;