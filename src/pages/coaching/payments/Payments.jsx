import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../../components/common/DashboardPrimitives';

export default function CoachingPerformance() {
  return (
    <DashboardPage
      eyebrow="Outcome tracking"
      title="Performance"
      description="Monitor assessments, student progress, and center-level outcomes across programs and batches."
    >
      <MetricGrid>
        <MetricCard icon="monitoring" label="Average score" value="81%" change="+6%" helper="Across weekly tests" />
        <MetricCard icon="group" label="Top performers" value="96" change="+14 this cycle" helper="Above internal benchmark" tone="emerald" />
        <MetricCard icon="notifications" label="At-risk students" value="27" change="Needs mentoring" helper="Below target scores" tone="rose" />
        <MetricCard icon="analytics" label="Test completion" value="93%" change="+2%" helper="Assessment participation" tone="amber" />
      </MetricGrid>

      <SectionCard title="Performance observations" description="Highlights from the latest center review">
        <div className="space-y-4 text-sm text-slate-600">
          <p className="rounded-2xl bg-slate-50 p-4">Foundation batches improved the most after the revised revision schedule.</p>
          <p className="rounded-2xl bg-slate-50 p-4">NEET long-test participation remains strong, with stable completion rates.</p>
          <p className="rounded-2xl bg-slate-50 p-4">Mentoring needs are concentrated in the evening mathematics cohorts.</p>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
