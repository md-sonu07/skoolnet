import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../../components/common/AppIcon';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="text-center mb-6 md:mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 mb-2">Manager Portal</p>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Welcome back</h1>
        <p className="text-sm text-slate-500 mt-2">
          Sign in to manage your platform
        </p>
      </div>

      {/* Form */}
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
            <div className="relative">
              <AppIcon name="mail" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/80"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <Link to="/auth/manager/forgot-password" className="text-xs text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <AppIcon name="lock" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-11 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/80"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <AppIcon name={showPassword ? 'visibility_off' : 'visibility'} size={18} />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setRememberMe(!rememberMe)}
              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${rememberMe ? 'bg-primary' : 'bg-slate-200'}`}
            >
              <span
                className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform shadow-sm ${rememberMe ? 'translate-x-4' : 'translate-x-1'}`}
              />
            </button>
            <span className="text-sm text-slate-600">Remember me</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 bg-primary text-white rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
        >
          <AppIcon name="login" size={18} />
          Sign in
        </button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-3 text-slate-400">Or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <div className="grid grid-cols-2 gap-3">
        <button className="py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          <AppIcon name="public" size={18} />
          Google
        </button>
        <button className="py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
          <AppIcon name="code" size={18} />
          GitHub
        </button>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-slate-500">
        Don't have an account?{' '}
        <Link to="/auth/manager/signup" className="text-primary font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}