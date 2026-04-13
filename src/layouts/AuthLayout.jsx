import { Outlet, Link } from 'react-router-dom';
import AppIcon from '../components/common/AppIcon';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 md:p-6 lg:p-8">
      {/* Main Container */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex min-h-[600px] lg:min-h-[700px]">
          {/* Left Side - Branding */}
          <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-primary via-blue-600 to-primary relative flex-col justify-between p-8 xl:p-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjYwIiBjeT0iMzAiIHI9IjIiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            
            {/* Brand - Top Left */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                  <AppIcon name="school" size={26} className="text-white" />
                </div>
                <div>
                  <h1 className="font-['Manrope'] font-extrabold text-2xl text-white tracking-tight">
                    Skoolnet
                  </h1>
                  <p className="text-white/60 text-xs">Management Platform</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-5">
              <div>
                <h2 className="text-2xl xl:text-3xl font-bold text-white leading-tight">
                  Manage your school<br />with complete control
                </h2>
                <p className="text-white/70 mt-3 text-sm">
                  The all-in-one platform for managing schools, coaching centers, and educational institutions.
                </p>
              </div>
              
              {/* Features */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <AppIcon name="check_circle" size={14} />
                  <span>Student Management</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <AppIcon name="check_circle" size={14} />
                  <span>Fee Tracking</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <AppIcon name="check_circle" size={14} />
                  <span>Attendance</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-xs">
                  <AppIcon name="check_circle" size={14} />
                  <span>Online Results</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 text-white/50 text-xs">
              <p>&copy; 2024 Skoolnet. All rights reserved.</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center bg-white">
            {/* Mobile Logo */}
            <div className="lg:hidden p-6 pb-0">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                  <AppIcon name="school" size={18} className="text-white" />
                </div>
                <span className="font-['Manrope'] font-extrabold text-xl text-slate-900">Skoolnet</span>
              </div>
            </div>

            {/* Form Container */}
            <div className="flex-1 flex items-center justify-center p-6 md:p-8">
              <div className="w-full max-w-sm lg:max-w-md space-y-8">
                <Outlet />
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="lg:hidden text-center pb-4 text-xs text-slate-400">
              <p>&copy; 2024 Skoolnet. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}