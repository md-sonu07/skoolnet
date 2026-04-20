import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { partnerLogin } from '../../../redux/thunk/partnerAuthThunk';
import { selectPartnerAuth, clearError } from '../../../redux/slice/partnerAuthSlice';
import AppIcon from '../../../components/common/AppIcon';

export default function PartnerLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useSelector(selectPartnerAuth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard/partner');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(partnerLogin(formData));
    if (result.success) {
      navigate('/dashboard/partner');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="partners" size={28} className="text-purple-600" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Partner Portal</h1>
        <p className="text-sm text-slate-500 mt-1">Sign in to manage your schools and coaching</p>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs text-red-600">{error}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Email</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="mail" size={16} />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                placeholder="partner@example.com"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-600">Password</label>
              <Link to="/auth/partner/forgot-password" className="text-xs text-purple-600 hover:underline">
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="lock" size={16} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                placeholder="Enter password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <AppIcon name={showPassword ? 'visibility_off' : 'visibility'} size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setRememberMe(!rememberMe)}
              className={`w-10 h-5 rounded-full transition-colors flex items-center ${rememberMe ? 'bg-purple-600' : 'bg-slate-200'}`}
            >
              <span className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${rememberMe ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
            <span className="text-xs text-slate-500">Remember me</span>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <AppIcon name="sync" size={16} className="animate-spin" />
          ) : (
            <AppIcon name="login" size={16} />
          )}
          {isLoading ? 'Signing in...' : 'Sign in to Partner Portal'}
        </button>
      </form>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-100"></div>
        <span className="text-xs text-slate-400">Or continue with</span>
        <div className="flex-1 h-px bg-slate-100"></div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="py-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
          <AppIcon name="public" size={14} />
          Google
        </button>
        <button className="py-2.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
          <AppIcon name="code" size={14} />
          GitHub
        </button>
      </div>

      <p className="text-center text-xs text-slate-500">
        Don't have a partner account?{' '}
        <Link to="/auth/partner/register" className="text-purple-600 font-medium">Register as Partner</Link>
      </p>
    </div>
  );
}
