import { configureStore } from '@reduxjs/toolkit';
import managerAuthReducer from '../slice/managerAuthSlice';
import partnerAuthReducer from '../slice/partnerAuthSlice';

export const store = configureStore({
  reducer: {
    managerAuth: managerAuthReducer,
    partnerAuth: partnerAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;