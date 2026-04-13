import { Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/auth/manager/Login';
import Signup from '../pages/auth/manager/Signup';

const authRoutes = (
  <Route path="/auth" element={<AuthLayout />}>
    <Route path="manager/login" element={<Login />} />
    <Route path="manager/signup" element={<Signup />} />
  </Route>
);

export default authRoutes;