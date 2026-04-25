import { useOutletContext } from 'react-router-dom';
import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';

export default function CoachingTeacherDashboard() {
  const { user } = useOutletContext();
  const userName = user?.name?.split(' ').slice(1).join(' ') || user?.name || 'Teacher';
  
  return (
    <DashboardPage
      eyebrow="Teacher dashboard"
      title={<span>Hi, <span className="capitalize">{userName}</span></span>}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/3">
          <MetricCard icon="school" label="My Courses" value="3" change="Active" helper="This semester" className="bg-primary/5 border-primary/20" />
        </div>
        
        <div className="flex-1">
          <MetricGrid>
            <MetricCard icon="group" label="Total Students" value="280" change="+20" helper="Across all courses" tone="emerald" />
            <MetricCard icon="monitoring" label="Attendance" value="94%" change="+2%" helper="Today's average" tone="amber" />
            <MetricCard icon="folder_open" label="Pending" value="5" change="Assignments" helper="Due this week" tone="rose" />
          </MetricGrid>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <SectionCard title="Today's Schedule" description="Your classes for today">
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold">9:00</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">NEET Physics - Class 11</p>
                <p className="text-sm text-slate-600">Batch: Morning | 45 students</p>
              </div>
              <StatusBadge tone="emerald">Completed</StatusBadge>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <span className="text-amber-600 font-bold">11:00</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">JEE Physics - Class 12</p>
                <p className="text-sm text-slate-600">Batch: Evening | 38 students</p>
              </div>
              <StatusBadge tone="amber">Upcoming</StatusBadge>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 font-bold">2:00</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900">NEET Physics - Class 12</p>
                <p className="text-sm text-slate-600">Batch: Morning | 42 students</p>
              </div>
              <StatusBadge tone="blue">Scheduled</StatusBadge>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Recent Activities" description="Latest updates">
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
              <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500"></div>
              <div>
                <p className="font-medium text-slate-900">Assignment submitted</p>
                <p className="text-xs">32 students submitted Physics assignment</p>
                <p className="text-xs text-slate-400 mt-1">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
              <div>
                <p className="font-medium text-slate-900">Attendance marked</p>
                <p className="text-xs">Daily attendance completed for all classes</p>
                <p className="text-xs text-slate-400 mt-1">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
              <div className="w-2 h-2 mt-2 rounded-full bg-amber-500"></div>
              <div>
                <p className="font-medium text-slate-900">Notes uploaded</p>
                <p className="text-xs">Chapter 5 notes shared with NEET Class 11</p>
                <p className="text-xs text-slate-400 mt-1">Yesterday</p>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardPage>
  );
}