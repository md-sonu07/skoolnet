import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../components/common/DashboardPrimitives';

const cohorts = [
  { name: 'Primary wing', count: '412 students', status: 'Stable', tone: 'emerald' },
  { name: 'Middle school', count: '388 students', status: '3 transfer requests', tone: 'amber' },
  { name: 'Senior secondary', count: '484 students', status: 'Admissions still open', tone: 'blue' },
];

export default function StudentManagement() {
  return (
    <DashboardPage
      eyebrow="Student desk"
      title="Student management"
      description="Track admissions, movement across classes, and student status across every academic wing."
    >
      <MetricGrid>
        <MetricCard icon="group" label="Student records" value="1,284" change="+29 recent updates" helper="Profiles and guardians" />
        <MetricCard icon="how_to_reg" label="New admissions" value="54" change="Current cycle" helper="Awaiting final allotment" tone="amber" />
        <MetricCard icon="school" label="Transfer requests" value="8" change="2 urgent" helper="Internal and external" tone="rose" />
        <MetricCard icon="check_circle" label="Verified documents" value="93%" change="+5%" helper="Student compliance" tone="emerald" />
      </MetricGrid>

      <SectionCard title="Cohort status" description="A quick look at student groups across the campus">
        <div className="space-y-4">
          {cohorts.map(item => (
            <div key={item.name} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-semibold text-slate-900">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.count}</p>
              </div>
              <StatusBadge tone={item.tone}>{item.status}</StatusBadge>
            </div>
          ))}
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
