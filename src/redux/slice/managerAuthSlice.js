import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

const managerAuthSlice = createSlice({
  name: 'managerAuth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const payload = action.payload;
      if (payload.user) {
        state.user = payload.user;
        state.isAuthenticated = true;
      } else if (payload.access) {
        state.isAuthenticated = true;
      }
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setCredentials,
  setUser,
  setLoading,
  setError,
  logout,
  clearError,
} = managerAuthSlice.actions;

export default managerAuthSlice.reducer;

export const selectManagerAuth = (state) => state.managerAuth;