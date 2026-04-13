import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';

export default function CoachingStudentDashboard() {
  return (
    <DashboardPage
      eyebrow="Student dashboard"
      title="Dashboard"
    >
      <MetricGrid>
        <MetricCard icon="school" label="My Course" value="NEET Foundation" change="Active" helper="Current course" />
        <MetricCard icon="monitoring" label="Attendance" value="96%" change="+2%" helper="This month" tone="emerald" />
        <MetricCard icon="folder_open" label="Pending" value="3" change="Assignments" helper="Due this week" tone="amber" />
        <MetricCard icon="payments" label="Fee Status" value="Paid" change="Jan 2024" helper="Up to date" tone="emerald" />
      </MetricGrid>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="Today's Schedule" description="Your classes for today">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold">9:00</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Physics</p>
                <p className="text-sm text-slate-600">Dr. Amit Kumar | Room 101</p>
              </div>
              <StatusBadge tone="emerald">Completed</StatusBadge>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <span className="text-amber-600 font-bold">11:00</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">Chemistry</p>
                <p className="text-sm text-slate-600">Ms. Priya Sharma | Lab 3</p>
              </div>
              <StatusBadge tone="amber">Upcoming</StatusBadge>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Recent Updates" description="Latest from your course">
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
              <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
              <div>
                <p className="font-medium text-slate-900">Assignment Due Tomorrow</p>
                <p className="text-xs">Physics Chapter 5 - Kinematics</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
              <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500"></div>
              <div>
                <p className="font-medium text-slate-900">Result Published</p>
                <p className="text-xs">Unit Test 1 | Score: 92/100</p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardPage>
  );
}