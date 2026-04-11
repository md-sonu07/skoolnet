import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../components/common/DashboardPrimitives';

export default function TeacherManagement() {
  return (
    <DashboardPage
      eyebrow="Faculty desk"
      title="Teacher management"
      description="Keep an eye on faculty strength, subject coverage, and staffing gaps without leaving the school dashboard."
    >
      <MetricGrid>
        <MetricCard icon="how_to_reg" label="Faculty members" value="86" change="+4 this month" helper="Teaching and support staff" />
        <MetricCard icon="school" label="Subject coverage" value="100%" change="No vacancies" helper="Across timetable" tone="emerald" />
        <MetricCard icon="monitoring" label="Observations due" value="11" change="This week" helper="Classroom reviews" tone="amber" />
        <MetricCard icon="notifications" label="Policy updates" value="3" change="Awaiting sign-off" helper="Internal communication" tone="rose" />
      </MetricGrid>

      <SectionCard title="Faculty checkpoints" description="Current staffing notes for leadership review">
        <div className="space-y-4 text-sm text-slate-600">
          <p className="rounded-2xl bg-slate-50 p-4">Science department has completed timetable rebalancing for classes 9 to 12.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Two teacher appraisals are scheduled for Friday afternoon.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Orientation pack is ready for the newly joined language faculty.</p>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
