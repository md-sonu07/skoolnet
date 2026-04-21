import login from './login';
import register from './register';
import logout from './logout';
import { getProfile, updateProfile } from './profile';

export const managerAuthAPI = {
  login,
  register,
  logout,
  getProfile,
  updateProfile,
};

export default managerAuthAPI;
