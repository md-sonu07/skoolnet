import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../../components/common/AppIcon';
import Dropdown from '../../../components/common/Dropdown';
import toast from 'react-hot-toast';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institutionName: '',
    type: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const typeOptions = [
    { value: 'school', label: 'School' },
    { value: 'coaching', label: 'Coaching Center' },
  ];

  const stateOptions = [
    { value: 'delhi', label: 'Delhi' },
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'chennai', label: 'Chennai' },
    { value: 'kolkata', label: 'Kolkata' },
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'pune', label: 'Pune' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    toast.success('Institution registration submitted!');
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Register Institution</h1>
        <p className="text-sm text-slate-500 mt-1">Create your account and get started</p>
      </div>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Phone Number</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="phone" size={16} />
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="+91 98765 43210"
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
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Institution Name */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Institution Name</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="school" size={16} />
              </div>
              <input
                type="text"
                value={formData.institutionName}
                onChange={(e) => handleChange('institutionName', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Delhi Public School"
              />
            </div>
          </div>

          {/* Type Dropdown */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Type</label>
            <Dropdown
              value={formData.type}
              onChange={(val) => handleChange('type', val)}
              options={typeOptions}
              placeholder="Select type"
              className="w-full"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-xs font-medium text-slate-600 mb-1">Address</label>
          <div className="relative">
            <div className="absolute left-3 top-3 text-slate-400">
              <AppIcon name="location_on" size={16} />
            </div>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              placeholder="Street address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* City */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">City</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="location_on" size={16} />
              </div>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="City"
              />
            </div>
          </div>

          {/* State */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">State</label>
            <Dropdown
              value={formData.state}
              onChange={(val) => handleChange('state', val)}
              options={stateOptions}
              placeholder="Select state"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Password */}
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
                placeholder="Min 8 characters"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <AppIcon name={showPassword ? 'visibility_off' : 'visibility'} size={16} />
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
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Confirm password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <AppIcon name={showConfirmPassword ? 'visibility_off' : 'visibility'} size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2">
          <button
            type="button"
            onClick={() => setAgreeTerms(!agreeTerms)}
            className={`w-10 h-5 rounded-full transition-colors flex items-center mt-0.5 ${agreeTerms ? 'bg-primary' : 'bg-slate-200'}`}
          >
            <span className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${agreeTerms ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
          <span className="text-xs text-slate-500">
            I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </span>
        </div>

        {/* Submit */}
        <button type="submit" disabled={!agreeTerms} className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2">
          <AppIcon name="business" size={16} />
          Register Institution
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-100"></div>
        <span className="text-xs text-slate-400">Or</span>
        <div className="flex-1 h-px bg-slate-100"></div>
      </div>

      <p className="text-center text-xs text-slate-500">
        Already have an account?{' '}
        <Link to="/auth/institution/login" className="text-primary font-medium">Sign in</Link>
      </p>
    </div>
  );
}