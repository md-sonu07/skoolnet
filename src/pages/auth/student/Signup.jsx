import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/api/useAuth';
import toast from 'react-hot-toast';
import AppIcon from '../../../components/common/AppIcon';
import api from '../../../api/axios';

export default function StudentSignup() {
  const [institutionType, setInstitutionType] = useState('');
  const [institutions, setInstitutions] = useState([]);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    institution_id: '',
  });
  const [loadingInstitutions, setLoadingInstitutions] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const navigate = useNavigate();
  const { signup, isSigningUp } = useAuth();

  // Fetch institutions when type is selected
  useEffect(() => {
    if (institutionType) {
      setLoadingInstitutions(true);
      api.get(`/institutions?type=${institutionType}`)
        .then(response => {
          setInstitutions(response.data || []);
        })
        .catch(() => {
          toast.error('Failed to load institutions');
          setInstitutions([]);
        })
        .finally(() => {
          setLoadingInstitutions(false);
        });
    } else {
      setInstitutions([]);
      setFormData(prev => ({ ...prev, institution_id: '' }));
    }
  }, [institutionType]);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (!institutionType) {
      toast.error('Please select institution type');
      return;
    }

    if (!formData.institution_id) {
      toast.error('Please select an institution');
      return;
    }

    try {
      const response = await signup({
        ...formData,
        role: 'student'
      });
      
      toast.success('Student registered successfully!');
      navigate('/dashboard/school/student/profile');
    } catch (error) {
      toast.error(error.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Student Registration</h1>
        <p className="text-sm text-slate-500 mt-1">Join as a student</p>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Institution Type */}
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

        {/* Institution Name */}
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

        <div className="grid grid-cols-2 gap-3">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Full Name</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="person" size={16} />
              </div>
              <input
                type="text"
                value={formData.full_name}
                onChange={(e) => handleChange('full_name', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Phone</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="phone" size={16} />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Optional"
              />
            </div>
          </div>
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
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="email@example.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Password</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="lock" size={16} />
              </div>
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Min 8 characters"
                required
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

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Confirm Password</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="lock" size={16} />
              </div>
              <input
                type={showPasswords ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSigningUp}
          className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSigningUp ? (
            <AppIcon name="sync" size={16} className="animate-spin" />
          ) : (
            <AppIcon name="person_add" size={16} />
          )}
          {isSigningUp ? 'Creating Account...' : 'Create Student Account'}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-100"></div>
        <span className="text-xs text-slate-400">Already have an account?</span>
        <div className="flex-1 h-px bg-slate-100"></div>
      </div>

      <p className="text-center text-xs text-slate-500">
        <Link to="/auth/student/login" className="text-primary font-medium">
          Sign in to your account
        </Link>
      </p>
    </div>
  );
}
