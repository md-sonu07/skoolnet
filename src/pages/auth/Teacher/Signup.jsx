import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppIcon from '../../../components/common/AppIcon';
import toast from 'react-hot-toast';
import { useAuth } from '../../../hooks/api/useAuth';
import { getErrorMessage } from '../../../utils/errorHelpers';

export default function TeacherSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const navigate = useNavigate();
  const { register, isRegistering, isAuthenticated, user, login } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      if (user?.institution?.role === 'TEACHER') {
        navigate('/dashboard/school-teacher/dashboard');
      } else {
        navigate('/dashboard/school-teacher/profile');
      }
    }
  }, [isAuthenticated, user, navigate]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const nameParts = formData.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      await register({
        email: formData.email,
        password: formData.password,
        first_name: firstName,
        last_name: lastName,
        phone: formData.phone,
      });

      // Auto-login after registration
      setIsLoggingIn(true);
      await login({ 
        email: formData.email, 
        password: formData.password 
      });
      
      toast.success('Account created and logged in!');
    } catch (error) {
      setIsLoggingIn(false);
      toast.error(getErrorMessage(error, 'Registration failed. Please try again.'));
    }
  };


  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Teacher Registration</h1>
        <p className="text-sm text-slate-500 mt-1">Create your account to join an institution</p>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-2.5">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="person" size={16} />
              </div>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Your full name"
                required
                disabled={isRegistering}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="mail" size={16} />
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm"
                placeholder="teacher@example.com"
                required
                disabled={isRegistering}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Phone (Optional)</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="phone" size={16} />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm"
                placeholder="+91 98765 43210"
                disabled={isRegistering}
              />
            </div>
          </div>

          {/* Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPasswords ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm pr-10"
                  placeholder="••••••••"
                  required
                  disabled={isRegistering}
                />
                <button
                  type="button"
                  onClick={() => setShowPasswords(!showPasswords)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 outline-none cursor-pointer"
                >
                  <AppIcon name={showPasswords ? 'visibility_off' : 'visibility'} size={18} />
                </button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Confirm</label>
              <div className="relative">
                <input
                  type={showPasswords ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm pr-10"
                  placeholder="••••••••"
                  required
                  disabled={isRegistering}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <button
            type="button"
            onClick={() => setAgreeTerms(!agreeTerms)}
            className={`w-10 h-5 rounded-full transition-colors flex items-center mt-0.5 ${agreeTerms ? 'bg-primary' : 'bg-slate-200'}`}
          >
            <span className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${agreeTerms ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
          <span className="text-xs text-slate-500">
            I agree to the <Link to="/terms" className="text-primary hover:underline font-medium">Terms</Link>
          </span>
        </div>

        <button 
          type="submit" 
          disabled={!agreeTerms || isRegistering || isLoggingIn} 
          className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2 transition-all"
        >
          {isRegistering || isLoggingIn ? (
            <AppIcon name="sync" size={16} className="animate-spin" />
          ) : (
            <AppIcon name="person_add" size={16} />
          )}
          {isRegistering ? 'Registering...' : isLoggingIn ? 'Setting up dashboard...' : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-xs text-slate-500">
        Already have an account?{' '}
        <Link to="/auth/teacher/login" className="text-primary font-medium">Sign in</Link>
      </p>
    </div>
  );
}