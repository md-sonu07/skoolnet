import { useOutletContext } from 'react-router-dom';
import AppIcon from '../../components/common/AppIcon';
import {
  DashboardPage,
  SectionCard,
} from '../../components/common/DashboardPrimitives';
import toast from 'react-hot-toast';
import { useManagerAuth } from '../../hooks/api/useManagerAuth';
import { ProfileSkeleton } from '../../components/common/Skeleton';

export default function ManagerProfile() {
  const { user, isLoadingProfile } = useManagerAuth();
  
  if (isLoadingProfile) {
    return <ProfileSkeleton />;
  }

  const managerInfo = {
    name: user?.first_name || user?.last_name 
      ? `${user.first_name || ''} ${user.last_name || ''}`.trim() 
      : 'Alexander Pierce',
    email: user?.email || 'alexander@skoolnet.com',
    phone: user?.phone || '+91 98765 43210',
    role: user?.is_superuser ? 'Platform Admin' : 'Platform Manager',
    department: 'Operations',
    joinDate: user?.created_at?.split('T')[0] || '2022-01-15',
    lastLogin: user?.last_login?.split('T')[0] || '2026-04-13',
    permissions: user?.is_superuser ? 'Full Access' : 'Limited Access',
  };

  return (
    <DashboardPage
      eyebrow="Admin profile"
      title="My Profile"
    >
      <SectionCard title="Personal Information" description="Your personal details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <AppIcon name="person" size={24} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Full Name</p>
              <p className="text-lg font-bold text-slate-900 capitalize">{managerInfo.name}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <AppIcon name="work" size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Role</p>
              <p className="text-sm font-bold text-slate-900">{managerInfo.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <AppIcon name="mail" size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Email</p>
              <p className="text-sm font-medium text-slate-900">{managerInfo.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <AppIcon name="phone" size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Phone</p>
              <p className="text-sm font-medium text-slate-900">{managerInfo.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <AppIcon name="business" size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Department</p>
              <p className="text-sm font-medium text-slate-900">{managerInfo.department}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
              <AppIcon name="calendar_today" size={20} className="text-rose-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Join Date</p>
              <p className="text-sm font-medium text-slate-900">{managerInfo.joinDate}</p>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Access & Permissions" description="Your platform access details">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <AppIcon name="admin_panel_settings" size={24} className="text-blue-600 mx-auto mb-2" />
            <p className="text-lg font-bold text-slate-900">{managerInfo.permissions}</p>
            <p className="text-xs text-slate-500">Permission Level</p>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-xl">
            <AppIcon name="login" size={24} className="text-emerald-600 mx-auto mb-2" />
            <p className="text-lg font-bold text-slate-900">{managerInfo.lastLogin}</p>
            <p className="text-xs text-slate-500">Last Login</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <AppIcon name="verified_user" size={24} className="text-purple-600 mx-auto mb-2" />
            <p className="text-lg font-bold text-slate-900">Active</p>
            <p className="text-xs text-slate-500">Account Status</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Quick Actions">
        <div className="flex flex-wrap gap-3">
          <button 
            onClick={() => toast.success('Profile edit mode enabled')}
            className="px-4 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2"
          >
            <AppIcon name="edit" size={16} />
            Edit Profile
          </button>
          <button 
            onClick={() => toast.success('Password reset link sent to your email')}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
          >
            <AppIcon name="lock" size={16} />
            Change Password
          </button>
          <button 
            onClick={() => toast.success('Redirecting to notification settings...')}
            className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm"
          >
            <AppIcon name="notifications" size={16} />
            Notification Settings
          </button>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}