import api from '../axios';

export const logout = () => {
  const refreshToken = localStorage.getItem('refresh_token') || 
                       localStorage.getItem('manager_refresh_token') || 
                       localStorage.getItem('partner_refresh_token');
  
  if (!refreshToken) {
    return Promise.resolve(); // If no token, consider logout successful locally
  }
  
  return api.post('/accounts/logout', { refresh: refreshToken });
};

export default logout;