import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppIcon from '../../../components/common/AppIcon';
import Dropdown from '../../../components/common/Dropdown';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/api/useAuth';

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [institution, setInstitution] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const { login, isLoggingIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard/school-student/');
    }
  }, [isAuthenticated, navigate]);

  const institutionOptions = [
    { value: 'delhi-public', label: 'Delhi Public School' },
    { value: 'apex-coaching', label: 'Apex Coaching Center' },
    { value: 'royal-academy', label: 'Royal Academy' },
    { value: 'bright-future', label: 'Bright Future Institute' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    try {
      await login({ email, password });
      toast.success('Successfully logged in!');
      navigate('/dashboard/school-student/');
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Invalid credentials');
    }
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Student Login</h1>
        <p className="text-sm text-slate-500 mt-1">Sign in to access your student portal</p>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-3">
          {/* Institution */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">School / Coaching</label>
            <Dropdown
              value={institution}
              onChange={setInstitution}
              options={institutionOptions}
              placeholder="Select your institution"
              className="w-full"
            />
          </div>

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
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-600">Password</label>
              <Link to="/auth/student/forgot-password" className="text-xs text-primary hover:underline">
                Forgot?
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
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Enter password"
                required
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
          className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
        >
          <AppIcon name={isLoggingIn ? 'sync' : 'login'} size={16} className={isLoggingIn ? 'animate-spin' : ''} />
          {isLoggingIn ? 'Signing in...' : 'Access Student Portal'}
        </button>
      </form>

      <p className="text-center text-xs text-slate-500">
        New student?{' '}
        <Link to="/auth/student/signup" className="text-primary font-medium">Request access</Link>
      </p>
    </div>
  );
}