import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('access_token') || null,
  isAuthenticated: !!localStorage.getItem('access_token'),
};

const managerAuthSlice = createSlice({
  name: 'managerAuth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, access, refresh } = action.payload;
      if (user) state.user = user;
      if (access) {
        state.token = access;
        state.isAuthenticated = true;
        localStorage.setItem('access_token', access);
      }
      if (refresh) {
        localStorage.setItem('refresh_token', refresh);
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
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