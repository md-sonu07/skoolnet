import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../components/common/DashboardPrimitives';

export default function AttendanceOverview() {
  return (
    <DashboardPage
      eyebrow="Daily tracking"
      title="Attendance overview"
      description="Watch class attendance trends, identify absences early, and keep the academic day on track."
    >
      <MetricGrid>
        <MetricCard icon="monitoring" label="Today’s attendance" value="94.8%" change="+1.1%" helper="Whole school" />
        <MetricCard icon="group" label="Students absent" value="67" change="-9 from yesterday" helper="Needs follow-up" tone="amber" />
        <MetricCard icon="how_to_reg" label="Teachers present" value="84/86" change="2 on leave" helper="Faculty attendance" tone="emerald" />
        <MetricCard icon="notifications" label="Parent alerts sent" value="31" change="Before noon" helper="Absence notifications" tone="rose" />
      </MetricGrid>

      <SectionCard title="Attendance highlights" description="Summary insights from the latest sync">
        <div className="space-y-4 text-sm text-slate-600">
          <p className="rounded-2xl bg-slate-50 p-4">Primary wing attendance remains the strongest at 97.2% today.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Class 11 absentee count is slightly elevated due to inter-school event participation.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Parent notifications were delivered successfully for all unreported absences.</p>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
