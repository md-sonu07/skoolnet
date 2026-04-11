import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../../components/common/DashboardPrimitives';

export default function CoachingOverview() {
  return (
    <DashboardPage
      eyebrow="Coaching snapshot"
      title="Overview"
      description="See batch strength, trainer availability, and performance direction for your coaching center."
    >
      <MetricGrid>
        <MetricCard icon="group" label="Active students" value="642" change="+34 this term" helper="Across all programs" />
        <MetricCard icon="school" label="Running batches" value="28" change="+3 new launches" helper="Online and offline" tone="emerald" />
        <MetricCard icon="how_to_reg" label="Trainers onboard" value="24" change="2 interviews pending" helper="Full-time and guest" tone="amber" />
        <MetricCard icon="monitoring" label="Avg. performance" value="81%" change="+6%" helper="Assessment improvement" tone="rose" />
      </MetricGrid>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="Today’s focus" description="Priority items for the center team">
          <div className="space-y-4 text-sm text-slate-600">
            <p className="rounded-2xl bg-slate-50 p-4">Finalize the weekend crash-course timetable for NEET batch B.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Review absentee follow-ups for evening JEE foundation students.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Confirm trainer allocation before next month’s scholarship test cycle.</p>
          </div>
        </SectionCard>

        <SectionCard title="Center health" description="A simple pulse across operations">
          <div className="space-y-4 text-sm text-slate-600">
            <p className="rounded-2xl bg-slate-50 p-4">Batch occupancy is healthy with strong retention in premium programs.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Trainer utilization is balanced after the recent schedule cleanup.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Assessment performance trends are rising in science-focused cohorts.</p>
          </div>
        </SectionCard>
      </div>
    </DashboardPage>
  );
}
