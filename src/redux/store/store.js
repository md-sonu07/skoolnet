import { configureStore } from '@reduxjs/toolkit';
import managerAuthReducer from '../slice/managerAuthSlice';

export const store = configureStore({
  reducer: {
    managerAuth: managerAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;