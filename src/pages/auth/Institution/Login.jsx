import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../../components/common/AppIcon';
import Dropdown from '../../../components/common/Dropdown';

export default function InstitutionLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [institutionCode, setInstitutionCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const roleOptions = [
    { value: 'admin', label: 'Administrator' },
    { value: 'teacher', label: 'Teacher' },
    // { value: 'staff', label: 'Staff' },
  ];

  return (
    <div className="space-y-5">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <AppIcon name="school" size={28} className="text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
        <p className="text-sm text-slate-500 mt-1">Sign in to your institution</p>
      </div>

      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-3">
          {/* Institution Code */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Institution Code</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <AppIcon name="business" size={16} />
              </div>
              <input
                type="text"
                value={institutionCode}
                onChange={(e) => setInstitutionCode(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="e.g., DPS001, COACH2024"
              />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="your.email@institution.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-600">Password</label>
              <Link to="/auth/institution/forgot-password" className="text-xs text-primary hover:underline">
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
                className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                placeholder="Enter password"
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

          {/* Role */}
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Login as</label>
            <Dropdown
              options={roleOptions}
              placeholder="Select your role"
              className="w-full"
            />
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
            <span className="text-xs text-slate-500">Remember this device</span>
          </div>
        </div>

        <button type="submit" className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2">
          <AppIcon name="login" size={16} />
          Sign in to Dashboard
        </button>
      </form>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-slate-100"></div>
        <span className="text-xs text-slate-400">Or</span>
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
        New institution?{' '}
        <Link to="/auth/institution/register" className="text-primary font-medium">Register here</Link>
      </p>
    </div>
  );
}