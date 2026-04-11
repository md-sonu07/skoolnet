import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../../components/common/DashboardPrimitives';

export default function CoachingSettings() {
  return (
    <DashboardPage
      eyebrow="Center controls"
      title="Settings"
      description="Set up operational rules for batches, tests, fee reminders, and communication defaults for the coaching center."
    >
      <MetricGrid>
        <MetricCard icon="settings" label="Config groups" value="9" change="2 updated today" helper="Center-wide controls" />
        <MetricCard icon="payments" label="Fee reminder rules" value="4" change="All active" helper="Collection workflows" tone="emerald" />
        <MetricCard icon="notifications" label="Broadcast templates" value="11" change="2 drafts pending" helper="Parent and student updates" tone="amber" />
        <MetricCard icon="security" label="Access policies" value="6" change="No issues found" helper="Role permissions" tone="rose" />
      </MetricGrid>

      <SectionCard title="Configuration notes" description="High-impact controls worth reviewing regularly">
        <div className="space-y-4 text-sm text-slate-600">
          <p className="rounded-2xl bg-slate-50 p-4">Batch publishing rules are configured to avoid timetable overlap on the same faculty pool.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Fee reminders are scheduled on a staggered cadence before due dates.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Assessment access is restricted to enrolled students and assigned trainers.</p>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
