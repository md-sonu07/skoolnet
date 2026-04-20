import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { partnerRegister } from '../../../redux/thunk/partnerAuthThunk';
import { selectPartnerAuth, clearError } from '../../../redux/slice/partnerAuthSlice';
import AppIcon from '../../../components/common/AppIcon';

export default function PartnerRegister() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

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
    setPasswordError('');

    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    }

    const { confirmPassword, agreeTerms, ...registerData } = formData;
    const result = await dispatch(partnerRegister(registerData));
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
        <h1 className="text-2xl font-bold text-slate-900">Become a Partner</h1>
        <p className="text-sm text-slate-500 mt-1">Register to manage schools and coaching centers</p>
      </div>

      {(error || passwordError) && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs text-red-600">{error || passwordError}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Company/Organization Name</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="business" size={16} />
              </div>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                placeholder="Your organization name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Contact Person</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <AppIcon name="person" size={16} />
                </div>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  placeholder="Full name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Phone Number</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <AppIcon name="phone" size={16} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Email Address</label>
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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Password</label>
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
                  placeholder="Create password"
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
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <AppIcon name="lock" size={16} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, agreeTerms: !formData.agreeTerms })}
              className={`w-5 h-5 rounded border flex items-center justify-center transition-colors mt-0.5 ${
                formData.agreeTerms ? 'bg-purple-600 border-purple-600' : 'border-slate-300'
              }`}
            >
              {formData.agreeTerms && <AppIcon name="check" size={12} className="text-white" />}
            </button>
            <span className="text-xs text-slate-600">
              I agree to the{' '}
              <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
            </span>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isLoading || !formData.agreeTerms}
          className="w-full py-2.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <AppIcon name="sync" size={16} className="animate-spin" />
          ) : (
            <AppIcon name="person_add" size={16} />
          )}
          {isLoading ? 'Creating account...' : 'Register as Partner'}
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
        Already have a partner account?{' '}
        <Link to="/auth/partner/login" className="text-purple-600 font-medium">Sign in</Link>
      </p>
    </div>
  );
}
