import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('manager_user')) || null,
  token: localStorage.getItem('manager_access_token') || null,
  isAuthenticated: !!localStorage.getItem('manager_access_token'),
};

const managerAuthSlice = createSlice({
  name: 'managerAuth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, access, refresh } = action.payload;
      if (user) {
        state.user = user;
        localStorage.setItem('manager_user', JSON.stringify(user));
      }
      if (access) {
        state.token = access;
        state.isAuthenticated = true;
        localStorage.setItem('manager_access_token', access);
      }
      if (refresh) {
        localStorage.setItem('manager_refresh_token', refresh);
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('manager_user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('manager_access_token');
      localStorage.removeItem('manager_refresh_token');
      localStorage.removeItem('manager_user');
    },
  },
});

export const {
  setCredentials,
  setUser,
  logout,
} = managerAuthSlice.actions;

export default managerAuthSlice.reducer;

export const selectManagerAuth = (state) => state.managerAuth;