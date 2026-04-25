import { useState } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';
import { useAuth } from '../../../hooks/api/useAuth';

export default function TeacherProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user, isLoadingProfile } = useAuth();

  if (isLoadingProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AppIcon name="sync" size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  const teacherData = {
    name: user?.name || user?.username || 'Rajesh Kumar',
    email: user?.email || 'rajesh.kumar@skoolnet.com',
    phone: user?.phone || '+91 98765 43210',
    employeeId: user?.employee_id || 'EMP-2023-0142',
    department: user?.department || 'Mathematics',
    qualification: user?.qualification || 'M.Sc. Mathematics, B.Ed.',
    experience: user?.experience || '8 Years',
    joinDate: user?.date_joined?.split('T')[0] || '2016-07-15',
    address: user?.address || '123, Teacher Colony, Near School, City - 123456',
    status: user?.is_active ? 'Active' : 'Inactive',
  };

  return (
    <DashboardPage
      eyebrow="Account"
      title="Profile"
      description="View and manage your profile information"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Profile Picture" description="" className="lg:col-span-1">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-200 flex items-center justify-center mb-4">
              <AppIcon name="person" size={64} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 capitalize">{teacherData.name}</h3>
            <p className="text-sm text-slate-600 mb-3">{teacherData.department} Teacher</p>
            <StatusBadge tone={teacherData.status === 'Active' ? 'emerald' : 'rose'}>{teacherData.status}</StatusBadge>
            <button className="mt-4 w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
              Change Photo
            </button>
          </div>
        </SectionCard>

        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="Personal Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                <p className="text-slate-900 font-medium capitalize">{teacherData.name}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                <p className="text-slate-900 font-medium">{teacherData.email}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                <p className="text-slate-900 font-medium">{teacherData.phone}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Employee ID</label>
                <p className="text-slate-900 font-medium">{teacherData.employeeId}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Address</label>
                <p className="text-slate-900 font-medium">{teacherData.address}</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Professional Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Department</label>
                <p className="text-slate-900 font-medium">{teacherData.department}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Qualification</label>
                <p className="text-slate-900 font-medium">{teacherData.qualification}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Experience</label>
                <p className="text-slate-900 font-medium">{teacherData.experience}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Join Date</label>
                <p className="text-slate-900 font-medium">{teacherData.joinDate}</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Security" description="Manage your account security">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    <AppIcon name="lock" size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Change Password</p>
                    <p className="text-xs text-slate-500">Update your account password</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                  Change
                </button>
              </div>
            </div>
          </SectionCard>

          {isEditing ? (
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setIsEditing(false)}
                className="px-4 py-2.5 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button 
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
              >
                <AppIcon name="edit" size={18} />
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </DashboardPage>
  );
}