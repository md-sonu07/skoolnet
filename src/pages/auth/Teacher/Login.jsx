import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppIcon from '../../../components/common/AppIcon';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/api/useAuth';
import { getErrorMessage } from '../../../utils/errorHelpers';

export default function TeacherLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const { login, isLoggingIn, user, isAuthenticated } = useAuth();
  
  // Handle automatic redirection if already logged in or after successful login
  useEffect(() => {
    if (isAuthenticated) {
      if (user?.institution) {
        const isTeacher = user.institution.role === 'TEACHER';
        const type = user.institution.type; // SCHOOL or COACHING
        
        if (isTeacher) {
          if (type === 'COACHING') {
            navigate(`/dashboard/coaching/teacher/${user.id}/dashboard`);
          } else {
            navigate(`/dashboard/school-teacher/dashboard`);
          }
        } else {
          // Not a teacher? Redirect to appropriate dashboard regardless
          navigate(type === 'COACHING' ? '/dashboard/coaching/overview' : '/dashboard/school/overview');
        }
      } else if (user) {
        // Fallback for users without institution (e.g. freshly registered)
        // For teachers, we might want to send them to the success/onboarding page
        // But for now, let's just send them to a default profile or dashboard
        navigate('/dashboard/school-teacher/profile'); 
      }
    }
  }, [isAuthenticated, user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    try {
      await login({ email, password });
      toast.success('Logged in successfully!');
    } catch (error) {
      toast.error(getErrorMessage(error, 'Login failed. Please check your credentials.'));
    }
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Teacher Login</h1>
        <p className="text-sm text-slate-500 mt-1">Sign in to access your teaching dashboard</p>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-3">
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Email Address</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="mail" size={16} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                placeholder="teacher@school.com"
                required
                disabled={isLoggingIn}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-600">Password</label>
              <Link to="/auth/teacher/forgot-password" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="lock" size={16} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                placeholder="Enter password"
                required
                disabled={isLoggingIn}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 outline-none cursor-pointer"
              >
                <AppIcon name={showPassword ? 'visibility_off' : 'visibility'} size={18} />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setRememberMe(!rememberMe)}
              className={`w-10 h-5 rounded-full transition-colors flex items-center ${rememberMe ? 'bg-primary' : 'bg-slate-200'}`}
            >
              <span className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${rememberMe ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
            <span className="text-xs text-slate-500">Remember me</span>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoggingIn}
          className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoggingIn ? (
            <>
              <AppIcon name="sync" size={16} className="animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              <AppIcon name="login" size={16} />
              Access Teacher Dashboard
            </>
          )}
        </button>
      </form>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-100"></div>
        <span className="text-xs text-slate-400">Or</span>
        <div className="flex-1 h-px bg-slate-100"></div>
      </div>

      <p className="text-center text-xs text-slate-500">
        New teacher?{' '}
        <Link to="/auth/teacher/signup" className="text-primary font-medium">Join Institution</Link>
      </p>
    </div>
  );
}