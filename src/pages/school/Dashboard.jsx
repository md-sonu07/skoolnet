import { useOutletContext } from 'react-router-dom';
import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../components/common/DashboardPrimitives';
import { useAuth } from '../../hooks/api/useAuth';
import { DashboardSkeleton } from '../../components/common/Skeleton';

export default function SchoolOverview() {
  const { schoolName, adminName } = useOutletContext();
  const { isLoadingProfile } = useAuth();

  if (isLoadingProfile) {
    return (
      <DashboardPage eyebrow="School dashboard" title="Overview">
        <DashboardSkeleton />
      </DashboardPage>
    );
  }
  
  return (
    <DashboardPage
      eyebrow="School dashboard"
      title={`${schoolName || 'Overview'}`}
    >
      <MetricGrid>
        <MetricCard icon="group" label="Enrolled students" value="1,284" change="+72 this session" helper="All classes combined" />
        <MetricCard icon="how_to_reg" label="Teachers active" value="86" change="4 new this month" helper="Teaching and support staff" tone="emerald" />
        <MetricCard icon="monitoring" label="Attendance today" value="94.8%" change="+1.1%" helper="Compared with last week" tone="amber" />
        <MetricCard icon="notifications" label="Parent notices" value="7" change="2 pending approval" helper="Communication queue" tone="rose" />
      </MetricGrid>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="Today’s priorities" description="What the school team should watch first">
          <div className="space-y-4 text-sm text-slate-600">
            <p className="rounded-2xl bg-slate-50 p-4">Finalize transport updates for the new route expansion.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Review class 9 admissions documents pending parent verification.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Share attendance summary with department heads by 4 PM.</p>
          </div>
        </SectionCard>

        <SectionCard title="Operational health" description="A simple pulse across school functions">
          <div className="space-y-4 text-sm text-slate-600">
            <p className="rounded-2xl bg-slate-50 p-4">Admissions desk is clearing requests within the same day.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Teacher roster is fully staffed for the current timetable.</p>
            <p className="rounded-2xl bg-slate-50 p-4">Attendance sync is healthy across all sections.</p>
          </div>
        </SectionCard>
      </div>
    </DashboardPage>
  );
}
