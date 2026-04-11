import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../components/common/DashboardPrimitives';

const settingsGroups = [
  { name: 'Role permissions', detail: 'Control who can approve schools, publish reports, and send announcements.', tone: 'blue' },
  { name: 'Billing controls', detail: 'Define renewal reminders and fallback actions for failed payments.', tone: 'amber' },
  { name: 'Security safeguards', detail: 'Enable extra verification for sensitive actions and admin logins.', tone: 'rose' },
];

export default function ManagerSettings() {
  return (
    <DashboardPage
      eyebrow="System configuration"
      title="Manager settings"
      actions={
        <>
          <button type="button" className="btn-primary">
            Save changes
          </button>
          <button type="button" className="btn-secondary">
            View audit log
          </button>
        </>
      }
    >
      <MetricGrid>
        <MetricCard icon="settings" label="Config groups" value="12" change="3 updated this week" helper="System-wide controls" />
        <MetricCard icon="security" label="Security rules" value="9" change="All enforced" helper="Login and action guards" tone="emerald" />
        <MetricCard icon="payments" label="Billing policies" value="4" change="1 review pending" helper="Auto-renew logic" tone="amber" />
        <MetricCard icon="notifications" label="Audit events" value="146" change="+22 today" helper="Tracked changes" tone="rose" />
      </MetricGrid>

      <SectionCard title="Control groups" description="The most sensitive settings areas in the manager dashboard">
        <div className="space-y-4">
          {settingsGroups.map(item => (
            <div key={item.name} className="rounded-2xl border border-slate-100 bg-white/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <h4 className="font-semibold text-slate-900">{item.name}</h4>
                <StatusBadge tone={item.tone}>Configured</StatusBadge>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </DashboardPage>
  );
}
