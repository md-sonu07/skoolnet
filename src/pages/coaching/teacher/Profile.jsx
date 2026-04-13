import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';

const teacherData = {
  name: 'Dr. Amit Kumar',
  email: 'amit@skoolnet.com',
  phone: '+91 98765 43210',
  employeeId: 'COACH-2023-0142',
  qualification: 'M.Sc Physics, B.Ed',
  experience: '8 Years',
  subjects: 'Physics, NEET, JEE',
  joinDate: '2022-07-15',
};

export default function CoachingTeacherProfile() {
  return (
    <DashboardPage
      eyebrow="Account"
      title="Profile"
      description="View and manage your profile"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Profile Picture" description="" className="lg:col-span-1">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-200 flex items-center justify-center mb-4">
              <AppIcon name="person" size={64} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{teacherData.name}</h3>
            <p className="text-sm text-slate-600 mb-3">{teacherData.subjects}</p>
            <StatusBadge tone="emerald">Active</StatusBadge>
          </div>
        </SectionCard>

        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="Personal Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                <p className="text-slate-900 font-medium">{teacherData.name}</p>
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
            </div>
          </SectionCard>

          <SectionCard title="Professional Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Qualification</label>
                <p className="text-slate-900 font-medium">{teacherData.qualification}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Experience</label>
                <p className="text-slate-900 font-medium">{teacherData.experience}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Subjects</label>
                <p className="text-slate-900 font-medium">{teacherData.subjects}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Join Date</label>
                <p className="text-slate-900 font-medium">{teacherData.joinDate}</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </DashboardPage>
  );
}