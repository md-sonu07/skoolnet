import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../../components/common/DashboardPrimitives';

export default function TrainerManagement() {
  return (
    <DashboardPage
      eyebrow="People operations"
      title="Trainer management"
      description="Track trainer coverage, interview pipeline, and scheduling readiness for every coaching batch."
    >
      <MetricGrid>
        <MetricCard icon="how_to_reg" label="Active trainers" value="24" change="+2 this month" helper="Core faculty and guests" />
        <MetricCard icon="school" label="Subject coverage" value="97%" change="1 chemistry gap" helper="Across all batches" tone="amber" />
        <MetricCard icon="monitoring" label="Demo classes" value="6" change="This week" helper="Hiring pipeline" tone="emerald" />
        <MetricCard icon="notifications" label="Schedule changes" value="4" change="Need confirmation" helper="Trainer coordination" tone="rose" />
      </MetricGrid>

      <SectionCard title="Trainer desk notes" description="Current updates from the faculty pipeline">
        <div className="space-y-4 text-sm text-slate-600">
          <p className="rounded-2xl bg-slate-50 p-4">Physics mentor interviews are lined up for Monday morning.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Weekend guest faculty slots are fully mapped for scholarship preparation sessions.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Trainer leave calendar is synced with the latest batch revisions.</p>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
