import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';

const batches = [
  { name: 'JEE Target 2027', timing: '7:00 AM - 9:00 AM', fill: '92% full', tone: 'emerald' },
  { name: 'NEET Crash Course', timing: '10:00 AM - 1:00 PM', fill: 'Waitlist active', tone: 'amber' },
  { name: 'Foundation IX-X', timing: '4:00 PM - 6:00 PM', fill: 'Open seats available', tone: 'blue' },
];

export default function BatchManagement() {
  return (
    <DashboardPage
      eyebrow="Program desk"
      title="Batch management"
      description="Coordinate batch timings, seat utilization, and operational readiness for every coaching program."
    >
      <MetricGrid>
        <MetricCard icon="group" label="Active batches" value="28" change="+3 this term" helper="Core and revision programs" />
        <MetricCard icon="rocket_launch" label="Seat occupancy" value="88%" change="+7%" helper="Average batch fill" tone="emerald" />
        <MetricCard icon="notifications" label="Waitlisted students" value="41" change="Across 5 batches" helper="Demand signal" tone="amber" />
        <MetricCard icon="monitoring" label="Schedule conflicts" value="2" change="Need adjustment" helper="Resource planning" tone="rose" />
      </MetricGrid>

      <SectionCard title="Batch watchlist" description="Programs that need attention or are performing especially well">
        <div className="space-y-4">
          {batches.map(item => (
            <div key={item.name} className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white/70 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-semibold text-slate-900">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.timing}</p>
              </div>
              <StatusBadge tone={item.tone}>{item.fill}</StatusBadge>
            </div>
          ))}
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
