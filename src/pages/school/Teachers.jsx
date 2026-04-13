import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../components/common/AppIcon';
import Dropdown from '../../components/common/Dropdown';
import Pagination from '../../components/common/Pagination';
import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
  StatusBadge,
} from '../../components/common/DashboardPrimitives';

const teacherStats = [
  { icon: 'how_to_reg', label: 'Total Teachers', value: '86', change: '+4', helper: 'This month', tone: 'blue' },
  { icon: 'school', label: 'Subject Coverage', value: '100%', change: 'None', helper: 'Full coverage', tone: 'emerald' },
  { icon: 'monitoring', label: 'Observations', value: '11', change: 'This week', helper: 'Pending', tone: 'amber' },
  { icon: 'notifications', label: 'Policy Updates', value: '3', change: 'Awaiting', helper: 'Sign-off', tone: 'rose' },
  { icon: 'check_circle', label: 'Active', value: '82', change: '+2', helper: 'Currently teaching', tone: 'green' },
  { icon: 'event', label: 'On Leave', value: '4', change: '1 urgent', helper: 'Approved', tone: 'purple' },
];

const teachers = [
  { id: 1, name: 'Dr. Rajesh Kumar', empNo: 'EMP001', subject: 'Mathematics', qualification: 'M.Sc, B.Ed', phone: '+91 98765 43201', email: 'rajesh@school.com', classes: 'Class 10-A, 10-B', status: 'active', joinDate: '2020-06-15', slug: 'rajesh-kumar' },
  { id: 2, name: 'Ms. Priya Sharma', empNo: 'EMP002', subject: 'Physics', qualification: 'M.Sc, B.Ed', phone: '+91 98765 43202', email: 'priya@school.com', classes: 'Class 11-A, 12-A', status: 'active', joinDate: '2019-08-20', slug: 'priya-sharma' },
  { id: 3, name: 'Mr. Amit Singh', empNo: 'EMP003', subject: 'Chemistry', qualification: 'M.Sc, B.Ed', phone: '+91 98765 43203', email: 'amit@school.com', classes: 'Class 11-B, 12-B', status: 'active', joinDate: '2021-01-10', slug: 'amit-singh' },
  { id: 4, name: 'Ms. Sneha Gupta', empNo: 'EMP004', subject: 'English', qualification: 'M.A, B.Ed', phone: '+91 98765 43204', email: 'sneha@school.com', classes: 'Class 9-A, 10-A', status: 'active', joinDate: '2020-03-22', slug: 'sneha-gupta' },
  { id: 5, name: 'Mr. Vikram Patel', empNo: 'EMP005', subject: 'Biology', qualification: 'M.Sc, B.Ed', phone: '+91 98765 43205', email: 'vikram@school.com', classes: 'Class 10-B, 11-A', status: 'active', joinDate: '2022-07-05', slug: 'vikram-patel' },
  { id: 6, name: 'Ms. Ananya Reddy', empNo: 'EMP006', subject: 'History', qualification: 'M.A, B.Ed', phone: '+91 98765 43206', email: 'ananya@school.com', classes: 'Class 9-A, 9-B', status: 'active', joinDate: '2021-09-15', slug: 'ananya-reddy' },
  { id: 7, name: 'Mr. Rahul Verma', empNo: 'EMP007', subject: 'Geography', qualification: 'M.A, B.Ed', phone: '+91 98765 43207', email: 'rahul@school.com', classes: 'Class 10-A, 12-A', status: 'on_leave', joinDate: '2020-11-08', slug: 'rahul-verma' },
  { id: 8, name: 'Ms. Meera Nair', empNo: 'EMP008', subject: 'Computer Science', qualification: 'M.Tech, B.Ed', phone: '+91 98765 43208', email: 'meera@school.com', classes: 'Class 11-A, 12-A', status: 'active', joinDate: '2023-01-20', slug: 'meera-nair' },
];

export default function TeacherManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredTeachers = useMemo(() => {
    return teachers.filter(teacher => {
      const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           teacher.empNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           teacher.subject.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = subjectFilter === 'all' || teacher.subject === subjectFilter;
      const matchesStatus = statusFilter === 'all' || teacher.status === statusFilter;
      return matchesSearch && matchesSubject && matchesStatus;
    });
  }, [searchTerm, subjectFilter, statusFilter]);

  const paginatedTeachers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTeachers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTeachers, currentPage, itemsPerPage]);

  const subjectOptions = [
    { value: 'all', label: 'All Subjects' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Physics', label: 'Physics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Biology', label: 'Biology' },
    { value: 'English', label: 'English' },
    { value: 'History', label: 'History' },
    { value: 'Geography', label: 'Geography' },
    { value: 'Computer Science', label: 'Computer Science' },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'on_leave', label: 'On Leave' },
    { value: 'inactive', label: 'Inactive' },
  ];

  return (
    <DashboardPage
      eyebrow="Faculty desk"
      title="Teacher Management"
      actions={
        <>
          <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
            <AppIcon name="add" size={16} />
            Add Teacher
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <AppIcon name="upload" size={16} />
            Import CSV
          </button>
        </>
      }
    >
      <MetricGrid>
        {teacherStats.map((stat, index) => (
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

      <SectionCard title="All Teachers" description="Complete faculty list with subject assignments">
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, employee ID, or subject..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Dropdown value={subjectFilter} onChange={setSubjectFilter} options={subjectOptions} className="min-w-[160px]" />
            <Dropdown value={statusFilter} onChange={setStatusFilter} options={statusOptions} className="min-w-[140px]" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Emp No</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Teacher Name</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Subject</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Qualification</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Classes</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedTeachers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-500">
                    No teachers found matching your criteria.
                  </td>
                </tr>
              ) : (
                paginatedTeachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 text-sm font-medium text-slate-600">{teacher.empNo}</td>
                    <td className="py-3 px-3">
                      <p className="font-semibold text-sm text-slate-900">{teacher.name}</p>
                      <p className="text-xs text-slate-500">{teacher.email}</p>
                    </td>
                    <td className="py-3 px-3 text-sm text-slate-700">{teacher.subject}</td>
                    <td className="py-3 px-3 text-sm text-slate-600">{teacher.qualification}</td>
                    <td className="py-3 px-3 text-sm text-slate-700">{teacher.classes}</td>
                    <td className="py-3 px-3">
                      <StatusBadge tone={teacher.status === 'active' ? 'emerald' : teacher.status === 'on_leave' ? 'amber' : 'slate'}>
                        {teacher.status === 'on_leave' ? 'On Leave' : teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1">
                        <Link 
                          to={`/dashboard/school/teacher/${teacher.slug}/dashboard`}
                          target="_blank"
                          className="p-2 rounded hover:bg-slate-100 transition-colors text-blue-600 hover:text-blue-700"
                          title="View Dashboard (New Tab)"
                        >
                          <AppIcon name="open_in_new" size={14} />
                        </Link>
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors"><AppIcon name="visibility" size={14} className="text-slate-600" /></button>
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors"><AppIcon name="edit" size={14} className="text-slate-600" /></button>
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors"><AppIcon name="more_vert" size={14} className="text-slate-600" /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filteredTeachers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredTeachers.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredTeachers.length}
            className="mt-4"
          />
        )}
      </SectionCard>
    </DashboardPage>
  );
}
