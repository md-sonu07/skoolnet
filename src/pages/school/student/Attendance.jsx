import { useState } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
  MetricCard,
  MetricGrid,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';

const attendanceRecords = [
  { date: '2024-01-15', day: 'Monday', status: 'present', subject: 'Mathematics' },
  { date: '2024-01-15', day: 'Monday', status: 'present', subject: 'Science' },
  { date: '2024-01-15', day: 'Monday', status: 'present', subject: 'English' },
  { date: '2024-01-16', day: 'Tuesday', status: 'present', subject: 'Mathematics' },
  { date: '2024-01-16', day: 'Tuesday', status: 'present', subject: 'Science' },
  { date: '2024-01-16', day: 'Tuesday', status: 'absent', subject: 'English' },
  { date: '2024-01-17', day: 'Wednesday', status: 'present', subject: 'Mathematics' },
  { date: '2024-01-17', day: 'Wednesday', status: 'present', subject: 'History' },
  { date: '2024-01-17', day: 'Wednesday', status: 'present', subject: 'Geography' },
  { date: '2024-01-18', day: 'Thursday', status: 'present', subject: 'Mathematics' },
  { date: '2024-01-18', day: 'Thursday', status: 'present', subject: 'Science' },
  { date: '2024-01-18', day: 'Thursday', status: 'late', subject: 'English' },
  { date: '2024-01-19', day: 'Friday', status: 'present', subject: 'Mathematics' },
  { date: '2024-01-19', day: 'Friday', status: 'present', subject: 'History' },
  { date: '2024-01-19', day: 'Friday', status: 'present', subject: 'Physical Ed.' },
];

export default function StudentAttendance() {
  const [selectedMonth, setSelectedMonth] = useState('January 2024');

  const totalDays = attendanceRecords.length;
  const presentDays = attendanceRecords.filter(r => r.status === 'present').length;
  const absentDays = attendanceRecords.filter(r => r.status === 'absent').length;
  const lateDays = attendanceRecords.filter(r => r.status === 'late').length;
  const attendancePercentage = Math.round((presentDays / totalDays) * 100);

  return (
    <DashboardPage
      eyebrow="Academic"
      title="Attendance"
      description="View your attendance records"
    >
      <MetricGrid>
        <MetricCard icon="calendar_today" label="Total Days" value={totalDays} change="This month" helper="School days" />
        <MetricCard icon="check_circle" label="Present" value={presentDays} change="+2" helper="This month" tone="emerald" />
        <MetricCard icon="cancel" label="Absent" value={absentDays} change="1" helper="This month" tone="rose" />
        <MetricCard icon="schedule" label="Late" value={lateDays} change="1" helper="This month" tone="amber" />
        <MetricCard icon="trending_up" label="Attendance" value={`${attendancePercentage}%`} change="+2%" helper="This month" tone="emerald" />
      </MetricGrid>

      <SectionCard title="Attendance Calendar" description="January 2024">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Day</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Subject</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 text-slate-600">{record.date}</td>
                  <td className="py-3 px-4 text-slate-600">{record.day}</td>
                  <td className="py-3 px-4 font-medium text-slate-900">{record.subject}</td>
                  <td className="py-3 px-4">
                    <StatusBadge 
                      tone={record.status === 'present' ? 'emerald' : record.status === 'absent' ? 'rose' : 'amber'}
                    >
                      {record.status === 'present' ? 'Present' : record.status === 'absent' ? 'Absent' : 'Late'}
                    </StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}