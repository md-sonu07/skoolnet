import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/api/useAuth';
import { useInstitutionsList } from '../../../hooks/api/useInstitutions';
import toast from 'react-hot-toast';
import AppIcon from '../../../components/common/AppIcon';

export default function TeacherLogin() {
  const [institutionType, setInstitutionType] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    institution_id: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login, isLoggingIn } = useAuth();

  // Fetch institutions using React Query hook
  const { data: institutionsData, isLoading: loadingInstitutions } = useInstitutionsList(
    institutionType ? { type: institutionType, page_size: 100 } : null
  );

  const institutions = institutionsData?.results || institutionsData || [];

  // Reset institution selection if type changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, institution_id: '' }));
  }, [institutionType]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!institutionType) {
      toast.error('Please select institution type');
      return;
    }

    if (!formData.institution_id) {
      toast.error('Please select an institution');
      return;
    }

    try {
      await login({
        ...formData,
        institution_id: formData.institution_id,
        institution_type: institutionType,
        role: 'TEACHER',
      });
      toast.success('Logged in successfully!');
      
      if (institutionType === 'COACHING') {
        navigate('/dashboard/coaching/teacher/dashboard');
      } else {
        navigate('/dashboard/school-teacher/dashboard');
      }
    } catch (error) {
      toast.error(error.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Teacher Login</h1>
        <p className="text-sm text-slate-500 mt-1">Sign in to your account</p>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Institution Type</label>
          <select
            value={institutionType}
            onChange={(e) => setInstitutionType(e.target.value)}
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="">Select type...</option>
            <option value="SCHOOL">School</option>
            <option value="COACHING">Coaching Center</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Institution Name</label>
          <select
            value={formData.institution_id}
            onChange={(e) => handleChange('institution_id', e.target.value)}
            disabled={loadingInstitutions || !institutionType}
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50"
          >
            <option value="">
              {loadingInstitutions ? 'Loading...' : 'Select institution...'}
            </option>
            {institutions.map((inst) => (
              <option key={inst.id} value={inst.id}>
                {inst.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Email Address</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <AppIcon name="mail" size={16} />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="email@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Password</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <AppIcon name="lock" size={16} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
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

        <button
          type="submit"
          disabled={isLoggingIn}
          className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          <AppIcon name="login" size={16} />
          {isLoggingIn ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <p className="text-center text-xs text-slate-500 pt-2">
        Don't have an account?{' '}
        <Link to="/auth/teacher/signup" className="text-primary font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
}
