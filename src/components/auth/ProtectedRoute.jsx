import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/slice/authSlice';
import { selectManagerAuth } from '../../redux/slice/managerAuthSlice';

export default function ProtectedRoute({ role }) {
  const auth = useSelector(selectAuth);
  const managerAuth = useSelector(selectManagerAuth);

  // Check if authenticated based on role or globally
  const isAuthenticated = role === 'manager' 
    ? managerAuth.isAuthenticated 
    : auth.isAuthenticated;

  if (!isAuthenticated) {
    // Redirect to the appropriate login page
    const loginPath = role === 'manager' ? '/auth/manager/login' : '/auth/institution/login';
    return <Navigate to={loginPath} replace />;
  }

  return <Outlet />;
}
