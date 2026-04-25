import { useState, useEffect } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';
import { useAuth } from '../../../hooks/api/useAuth';
import toast from 'react-hot-toast';

export default function TeacherProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const { user, isLoadingProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    employeeId: '',
    address: '',
    department: '',
    qualification: '',
    experience: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || user.username || '',
        email: user.email || '',
        phone: user.phone || '',
        employeeId: user.employee_id || '',
        address: user.address || '',
        department: user.department || '',
        qualification: user.qualification || '',
        experience: user.experience || '',
      });
    }
  }, [user]);

  if (isLoadingProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AppIcon name="sync" size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    toast.success('Teacher profile updated successfully! (Demo)');
    setIsEditing(false);
  };

  const teacherData = {
    name: formData.name || user?.name || user?.username || 'Not Set',
    email: formData.email || user?.email || 'Not Set',
    phone: formData.phone || user?.phone || 'Not Set',
    employeeId: formData.employeeId || user?.employee_id || 'Not Set',
    department: formData.department || user?.department || 'Not Set',
    qualification: formData.qualification || user?.qualification || 'Not Set',
    experience: formData.experience || user?.experience || 'Not Set',
    joinDate: user?.date_joined?.split('T')[0] || 'Not Set',
    address: formData.address || user?.address || 'Not Set',
    status: user?.is_active ? 'Active' : 'Inactive',
  };

  return (
    <DashboardPage
      eyebrow="Account"
      title="Profile"
      description="View and manage your profile information"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Teacher Overview" description="" className="lg:col-span-1">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4 border-2 border-slate-50 shadow-inner">
              <AppIcon name="person" size={64} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1 capitalize truncate">{teacherData.name}</h3>
            <p className="text-sm font-semibold text-primary mb-3 bg-primary/5 py-1 px-3 rounded-full inline-block">
              {teacherData.department} Teacher
            </p>
            
            <div className="flex justify-center mb-6">
              <StatusBadge tone={teacherData.status === 'Active' ? 'emerald' : 'rose'}>{teacherData.status}</StatusBadge>
            </div>

            <div className="space-y-3 text-left border-t border-slate-100 pt-6">
              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/50 border border-transparent hover:border-slate-200 transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                  <AppIcon name="mail" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Official Email</p>
                  <p className="text-xs font-medium text-slate-700 truncate">{teacherData.email}</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/50 border border-transparent hover:border-slate-200 transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                  <AppIcon name="phone" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Contact Number</p>
                  <p className="text-xs font-medium text-slate-700">{teacherData.phone}</p>
                </div>
              </div>

              <div className="group flex items-center gap-3 p-2.5 rounded-xl bg-slate-50/50 border border-transparent hover:border-slate-200 transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                  <AppIcon name="calendar_today" size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Member Since</p>
                  <p className="text-xs font-medium text-slate-700">{teacherData.joinDate}</p>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
              <AppIcon name="photo_camera" size={14} />
              Update Portrait
            </button>
          </div>
        </SectionCard>

        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="Personal Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                <input 
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Rajesh Kumar"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                <input 
                  type="email"
                  value={formData.email}
                  disabled={true}
                  placeholder="rajesh.kumar@skoolnet.com"
                  className="w-full px-3 py-2 border border-transparent bg-slate-50 rounded-lg text-sm font-medium text-slate-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                <input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  disabled={!isEditing}
                  placeholder="+91 98765 43210"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Employee ID</label>
                <input 
                  type="text"
                  value={formData.employeeId}
                  disabled={true}
                  placeholder="EMP-2023-0142"
                  className="w-full px-3 py-2 border border-transparent bg-slate-50 rounded-lg text-sm font-medium text-slate-500 cursor-not-allowed"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Address</label>
                <textarea 
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  disabled={!isEditing}
                  rows={2}
                  placeholder="123, Teacher Colony, City"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:border-transparent transition-all resize-none"
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Professional Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Department</label>
                <input 
                  type="text"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                  disabled={!isEditing}
                  placeholder="Mathematics"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Qualification</label>
                <input 
                  type="text"
                  value={formData.qualification}
                  onChange={(e) => handleInputChange('qualification', e.target.value)}
                  disabled={!isEditing}
                  placeholder="M.Sc. Mathematics, B.Ed."
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Experience</label>
                <input 
                  type="text"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  disabled={!isEditing}
                  placeholder="8 Years"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary disabled:bg-slate-50 disabled:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Join Date</label>
                <p className="px-3 py-2 text-sm font-medium text-slate-500 bg-slate-50 rounded-lg capitalize">
                  {teacherData.joinDate}
                </p>
              </div>
            </div>
          </SectionCard>

          <div className="flex justify-end gap-3">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                <AppIcon name="edit" size={18} />
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <SectionCard title="Security" description="Manage your account security">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  <AppIcon name="lock" size={20} className="text-slate-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Change Password</p>
                  <p className="text-xs text-slate-500">Update your account password</p>
                </div>
              </div>
              <button className="px-4 py-2 text-xs font-bold border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Change
              </button>
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardPage>
  );
}