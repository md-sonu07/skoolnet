import { useState } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';
import Dropdown from '../../../components/common/Dropdown';

const mockAttendanceData = [
  { date: '2024-01-15', class: 'Class 10-A', total: 42, present: 40, absent: 2 },
  { date: '2024-01-15', class: 'Class 10-B', total: 38, present: 36, absent: 2 },
  { date: '2024-01-14', class: 'Class 9-A', total: 45, present: 43, absent: 2 },
  { date: '2024-01-14', class: 'Class 9-B', total: 40, present: 38, absent: 2 },
];

const mockStudents = [
  { id: 1, name: 'Rahul Sharma', rollNo: '10A001', status: 'present' },
  { id: 2, name: 'Priya Patel', rollNo: '10A002', status: 'present' },
  { id: 3, name: 'Amit Kumar', rollNo: '10A003', status: 'absent' },
  { id: 4, name: 'Sneha Gupta', rollNo: '10A004', status: 'present' },
  { id: 5, name: 'Vikram Singh', rollNo: '10A005', status: 'present' },
];

export default function TeacherAttendance() {
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [selectedDate, setSelectedDate] = useState('2024-01-15');
  const [attendance, setAttendance] = useState(
    mockStudents.reduce((acc, s) => ({ ...acc, [s.id]: s.status }), {})
  );

  const markAttendance = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  const presentCount = Object.values(attendance).filter(s => s === 'present').length;
  const absentCount = Object.values(attendance).filter(s => s === 'absent').length;

  return (
    <DashboardPage
      eyebrow="Academic"
      title="Attendance"
      description="Mark and manage daily attendance for your classes"
    >
      <div className="flex flex-wrap gap-4 mb-6">
        <Dropdown
          label="Select Class"
          options={[
            { label: 'Class 10-A', value: 'Class 10-A' },
            { label: 'Class 10-B', value: 'Class 10-B' },
            { label: 'Class 9-A', value: 'Class 9-A' },
            { label: 'Class 9-B', value: 'Class 9-B' },
          ]}
          value={selectedClass}
          onChange={setSelectedClass}
        />
        <div className="flex items-center gap-2">
          <AppIcon name="calendar_today" size={18} className="text-slate-500" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div className="p-6 rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center gap-3 mb-2">
            <AppIcon name="group" size={20} className="text-blue-600" />
            <span className="text-sm text-slate-600">Total Students</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">{mockStudents.length}</p>
        </div>
        <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50">
          <div className="flex items-center gap-3 mb-2">
            <AppIcon name="check_circle" size={20} className="text-emerald-600" />
            <span className="text-sm text-emerald-700">Present</span>
          </div>
          <p className="text-2xl font-bold text-emerald-700">{presentCount}</p>
        </div>
        <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50">
          <div className="flex items-center gap-3 mb-2">
            <AppIcon name="cancel" size={20} className="text-rose-600" />
            <span className="text-sm text-rose-700">Absent</span>
          </div>
          <p className="text-2xl font-bold text-rose-700">{absentCount}</p>
        </div>
      </div>

      <SectionCard
        title={`Mark Attendance - ${selectedClass}`}
        description={`Date: ${selectedDate}`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Roll No</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Student Name</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">Present</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">Absent</th>
              </tr>
            </thead>
            <tbody>
              {mockStudents.map(student => (
                <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 text-slate-600 font-mono">{student.rollNo}</td>
                  <td className="py-3 px-4 font-medium text-slate-900">{student.name}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => markAttendance(student.id, 'present')}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        attendance[student.id] === 'present'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-400 hover:bg-emerald-100'
                      }`}
                    >
                      <AppIcon name="check" size={16} />
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => markAttendance(student.id, 'absent')}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                        attendance[student.id] === 'absent'
                          ? 'bg-rose-500 text-white'
                          : 'bg-slate-100 text-slate-400 hover:bg-rose-100'
                      }`}
                    >
                      <AppIcon name="close" size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-end">
          <button className="px-6 py-2.5 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Save Attendance
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Attendance History" description="Previous attendance records" className="mt-6">
        <div className="space-y-3">
          {mockAttendanceData.map((record, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
              <div className="flex items-center gap-3">
                <AppIcon name="event" size={20} className="text-slate-500" />
                <div>
                  <p className="font-medium text-slate-900">{record.class}</p>
                  <p className="text-xs text-slate-500">{record.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <StatusBadge tone="emerald">{record.present} Present</StatusBadge>
                <StatusBadge tone="rose">{record.absent} Absent</StatusBadge>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </DashboardPage>
  );
}