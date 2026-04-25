import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/slice/authSlice';
import { selectManagerAuth } from '../../redux/slice/managerAuthSlice';
import { selectPartnerAuth } from '../../redux/slice/partnerAuthSlice';

export default function ProtectedRoute({ role, allowedType, requiredRole }) {
  const auth = useSelector(selectAuth);
  const managerAuth = useSelector(selectManagerAuth);
  const partnerAuth = useSelector(selectPartnerAuth);
  const location = useLocation();

  // 1. Determine which auth slice to use
  let currentAuth = auth;
  if (role === 'manager') currentAuth = managerAuth;
  else if (role === 'partner') currentAuth = partnerAuth;

  const { isAuthenticated, user } = currentAuth;

  // 2. Check basic authentication
  if (!isAuthenticated) {
    const loginPath = role === 'manager' 
      ? '/auth/manager/login' 
      : role === 'partner'
        ? '/auth/partner/login'
        : role === 'teacher'
          ? '/auth/teacher/login'
          : '/auth/institution/login';
    
    return <Navigate to={loginPath} state={{ from: location }} replace />;
  }

  // 3. Check specific institution type if required
  if (allowedType && user?.institution) {
    if (user.institution.type !== allowedType) {
      // Redirect to their correct dashboard if they are on the wrong one
      const correctDashboard = user.institution.type === 'COACHING' 
        ? '/dashboard/coaching' 
        : '/dashboard/school';
      
      return <Navigate to={correctDashboard} replace />;
    }
  }

  // 4. Check membership role if required
  if (requiredRole && user?.institution) {
    if (user.institution.role !== requiredRole) {
      const fallbackPath = user.institution.type === 'COACHING' 
        ? '/dashboard/coaching/overview' 
        : '/dashboard/school/overview';
      return <Navigate to={fallbackPath} replace />;
    }
  }

  // 5. Check partner role if required
  if (role === 'partner' && !user?.partner) {
     return <Navigate to="/auth/partner/login" replace />;
  }

  return <Outlet />;
}
