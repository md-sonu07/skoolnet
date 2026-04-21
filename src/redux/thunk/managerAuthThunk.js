import { managerAuthAPI } from '../../api/auth/manager';
import { setCredentials, setUser, setLoading, setError, logout as logoutAction, clearError } from '../slice/managerAuthSlice';

export { clearError };

export const managerLogin = (credentials) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await managerAuthAPI.login(credentials);
    dispatch(setCredentials(response.data));
    return { success: true };
  } catch (error) {
    const message = error.response?.data?.detail || 'Login failed. Please try again.';
    dispatch(setError(message));
    return { success: false, error: message };
  }
};

export const managerRegister = (userData) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await managerAuthAPI.register(userData);
    const { user, message } = response.data;
    dispatch(setUser(user));
    return { success: true, message };
  } catch (error) {
    const message = error.response?.data?.message || 'Registration failed. Please try again.';
    dispatch(setError(message));
    return { success: false, error: message };
  }
};

export const managerLogout = () => async (dispatch) => {
  try {
    await managerAuthAPI.logout();
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    dispatch(logoutAction());
  }
};

export const getManagerProfile = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await managerAuthAPI.getProfile();
    dispatch(setUser(response.data));
    return { success: true };
  } catch (error) {
    dispatch(setError('Failed to fetch profile'));
    return { success: false };
  }
};

export const updateManagerProfile = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await managerAuthAPI.updateProfile(data);
    dispatch(setUser(response.data));
    return { success: true };
  } catch (error) {
    const message = error.response?.data?.message || 'Failed to update profile';
    dispatch(setError(message));
    return { success: false, error: message };
  }
};

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    dispatch(getManagerProfile());
  }
};