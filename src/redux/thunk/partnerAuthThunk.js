import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const mockPartner = {
  user: {
    id: 1,
    companyName: 'Demo Partner',
    contactName: 'Demo User',
    email: 'partner@demo.com',
  },
  token: 'mock-token-123',
};

export const partnerLogin = createAsyncThunk(
  'partnerAuth/login',
  async (credentials, { rejectWithValue }) => {
    if (import.meta.env.VITE_API_URL) {
      try {
        const response = await axios.post(`${API_URL}/partners/auth/login`, credentials);
        localStorage.setItem('partnerToken', response.data.token);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
      }
    }
    await new Promise(resolve => setTimeout(resolve, 800));
    if (credentials.email && credentials.password) {
      localStorage.setItem('partnerToken', mockPartner.token);
      return mockPartner;
    }
    return rejectWithValue('Invalid credentials');
  }
);

export const partnerRegister = createAsyncThunk(
  'partnerAuth/register',
  async (userData, { rejectWithValue }) => {
    if (import.meta.env.VITE_API_URL) {
      try {
        const response = await axios.post(`${API_URL}/partners/auth/register`, userData);
        localStorage.setItem('partnerToken', response.data.token);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Registration failed');
      }
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (userData.email && userData.password) {
      localStorage.setItem('partnerToken', mockPartner.token);
      return { ...mockPartner, user: { ...mockPartner.user, companyName: userData.companyName, contactName: userData.contactName, email: userData.email } };
    }
    return rejectWithValue('Registration failed');
  }
);

export const partnerLogout = createAsyncThunk(
  'partnerAuth/logout',
  async () => {
    localStorage.removeItem('partnerToken');
    return null;
  }
);

export const getPartnerProfile = createAsyncThunk(
  'partnerAuth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('partnerToken');
      const response = await axios.get(`${API_URL}/partners/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch profile');
    }
  }
);
