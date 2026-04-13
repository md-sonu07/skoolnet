import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../../components/common/AppIcon';
import Dropdown from '../../../components/common/Dropdown';

export default function StudentSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    parentName: '',
    parentPhone: '',
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const institutionOptions = [
    { value: 'delhi-public', label: 'Delhi Public School' },
    { value: 'apex-coaching', label: 'Apex Coaching Center' },
    { value: 'royal-academy', label: 'Royal Academy' },
    { value: 'bright-future', label: 'Bright Future Institute' },
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Student Registration</h1>
        <p className="text-sm text-slate-500 mt-1">Request access to your student portal</p>
      </div>

      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2.5">
          {/* Institution */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">School / Coaching</label>
            <Dropdown
              value={formData.institution}
              onChange={(val) => handleChange('institution', val)}
              options={institutionOptions}
              placeholder="Select your institution"
              className="w-full"
            />
          </div>

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
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="email@example.com"
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
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          {/* Parent Name & Phone (Optional) - Side by side */}
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Parent Name <span className="text-slate-400">(Optional)</span></label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <AppIcon name="person" size={16} />
                </div>
                <input
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => handleChange('parentName', e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Parent's name"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Parent Phone <span className="text-slate-400">(Optional)</span></label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <AppIcon name="phone" size={16} />
                </div>
                <input
                  type="tel"
                  value={formData.parentPhone}
                  onChange={(e) => handleChange('parentPhone', e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="+91 98765 43210"
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
            I agree to the <Link to="/terms" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
          </span>
        </div>

        <button type="submit" disabled={!agreeTerms} className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2">
          <AppIcon name="person_add" size={16} />
          Request Access
        </button>
      </form>

      <p className="text-center text-xs text-slate-500">
        Already have access?{' '}
        <Link to="/auth/student/login" className="text-primary font-medium">Sign in</Link>
      </p>
    </div>
  );
}