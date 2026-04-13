import { useOutletContext } from 'react-router-dom';
import AppIcon from '../../components/common/AppIcon';
import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../components/common/DashboardPrimitives';

const focusAreas = [
  { title: 'School onboarding queue', detail: '12 institutes submitted documents for final verification.', tone: 'amber' },
  { title: 'Website issue reports', detail: '4 medium-priority complaints are waiting for engineering sync.', tone: 'blue' },
  { title: 'Payment reconciliation', detail: '2 coaching subscriptions need manual review before renewal.', tone: 'rose' },
];

const systemHealth = [
  { label: 'New signups', value: '238 this week' },
  { label: 'Live dashboards', value: '91 active accounts' },
  { label: 'Average response time', value: '1.8 hrs support SLA' },
];

export default function ManagerOverview() {
  const { platformName, adminName } = useOutletContext();
  
  return (
    <DashboardPage
      eyebrow="Platform dashboard"
      title={`${platformName || 'Overview'}`}
      actions={
        <>
          <button type="button" className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
            <AppIcon name="download" size={16} />
            Download summary
          </button>
          <button type="button" className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-on-surface hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <AppIcon name="notifications" size={16} className="text-primary" />
            Review alerts
          </button>
        </>
      }
    >
      <MetricGrid>
        {[
          { icon: 'school', label: 'Total Schools', value: '84', change: '+6', helper: 'Active institutions', tone: 'blue' },
          { icon: 'rocket_launch', label: 'Coaching', value: '39', change: '+3', helper: 'Active centers', tone: 'emerald' },
          { icon: 'groups', label: 'Students', value: '8.1K', change: '+390', helper: 'Total enrolled', tone: 'purple' },
          { icon: 'payments', label: 'Revenue', value: '₹12.9L', change: '+18%', helper: 'This month', tone: 'green' },
          { icon: 'pending', label: 'Pending', value: '29', change: '13', helper: 'Verifications', tone: 'amber' },
          { icon: 'support', label: 'Tickets', value: '34', change: '-5', helper: 'Open issues', tone: 'rose' },
        ].map((stat, index) => (
          <MetricCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            helper={stat.helper}
            tone={stat.tone}
          />
        ))}
      </MetricGrid>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
        <SectionCard title="Operational focus" description="The most important workstreams to review today">
          <div className="space-y-4">
            {focusAreas.map(item => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-white/70 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <StatusBadge tone={item.tone}>In progress</StatusBadge>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Website pulse" description="A quick health snapshot across the network">
          <div className="space-y-4">
            {systemHealth.map(item => (
              <div key={item.label} className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-slate-950">{item.value}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </DashboardPage>
  );
}
