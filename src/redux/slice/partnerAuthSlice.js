import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('partner_user')) || null,
  token: localStorage.getItem('partner_access_token') || null,
  isAuthenticated: !!localStorage.getItem('partner_access_token'),
};

const partnerAuthSlice = createSlice({
  name: 'partnerAuth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, access, refresh } = action.payload;
      if (user) {
        state.user = user;
        localStorage.setItem('partner_user', JSON.stringify(user));
      }
      if (access) {
        state.token = access;
        state.isAuthenticated = true;
        localStorage.setItem('partner_access_token', access);
      }
      if (refresh) {
        localStorage.setItem('partner_refresh_token', refresh);
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('partner_user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('partner_access_token');
      localStorage.removeItem('partner_refresh_token');
      localStorage.removeItem('partner_user');
    },
  },
});

export const {
  setCredentials,
  setUser,
  logout,
} = partnerAuthSlice.actions;

export default partnerAuthSlice.reducer;

export const selectPartnerAuth = (state) => state.partnerAuth;
