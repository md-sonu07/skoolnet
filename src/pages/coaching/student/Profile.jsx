import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';

const studentData = {
  name: 'Aarav Sharma',
  email: 'aarav@email.com',
  phone: '+91 98765 43210',
  course: 'NEET Foundation',
  batch: 'Morning',
  joinDate: '2024-01-15',
};

export default function CoachingStudentProfile() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="My Profile"
      description="View your profile information"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Profile Picture" description="" className="lg:col-span-1">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-200 flex items-center justify-center mb-4">
              <AppIcon name="person" size={64} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{studentData.name}</h3>
            <p className="text-sm text-slate-600 mb-3">{studentData.course}</p>
            <StatusBadge tone="emerald">Active</StatusBadge>
          </div>
        </SectionCard>

        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="Personal Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                <p className="text-slate-900 font-medium">{studentData.name}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                <p className="text-slate-900 font-medium">{studentData.email}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                <p className="text-slate-900 font-medium">{studentData.phone}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Course</label>
                <p className="text-slate-900 font-medium">{studentData.course}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Batch</label>
                <p className="text-slate-900 font-medium">{studentData.batch}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Join Date</label>
                <p className="text-slate-900 font-medium">{studentData.joinDate}</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </DashboardPage>
  );
}