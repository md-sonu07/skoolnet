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

const studentStats = [
  { icon: 'group', label: 'Total Students', value: '1,284', change: '+72', helper: 'This session', tone: 'blue' },
  { icon: 'how_to_reg', label: 'New Admissions', value: '54', change: '+12', helper: 'Pending', tone: 'amber' },
  { icon: 'school', label: 'Classes', value: '12', change: 'Stable', helper: 'Active', tone: 'emerald' },
  { icon: 'check_circle', label: 'Verified', value: '93%', change: '+5%', helper: 'Documents', tone: 'green' },
  { icon: 'transfer_within', label: 'Transfers', value: '8', change: '2 urgent', helper: 'Requests', tone: 'rose' },
  { icon: 'payments', label: 'Fee Pending', value: '47', change: '₹2.4L', helper: 'Outstanding', tone: 'purple' },
];

const students = [
  { id: 1, name: 'Aarav Sharma', rollNo: '001', class: 'Class 10-A', father: 'Rajesh Sharma', phone: '+91 98765 43210', email: 'aarav@email.com', feeStatus: 'paid', status: 'active', admissionDate: '2024-01-15', slug: 'aarav-sharma' },
  { id: 2, name: 'Priya Singh', rollNo: '002', class: 'Class 10-A', father: 'Ajay Singh', phone: '+91 98765 43211', email: 'priya@email.com', feeStatus: 'paid', status: 'active', admissionDate: '2024-01-16', slug: 'priya-singh' },
  { id: 3, name: 'Rahul Verma', rollNo: '003', class: 'Class 9-B', father: 'Sunil Verma', phone: '+91 98765 43212', email: 'rahul@email.com', feeStatus: 'pending', status: 'active', admissionDate: '2024-01-10', slug: 'rahul-verma' },
  { id: 4, name: 'Sneha Gupta', rollNo: '004', class: 'Class 10-B', father: 'Raj Gupta', phone: '+91 98765 43213', email: 'sneha@email.com', feeStatus: 'paid', status: 'active', admissionDate: '2024-01-12', slug: 'sneha-gupta' },
  { id: 5, name: 'Kunal Patel', rollNo: '005', class: 'Class 11-A', father: 'Anil Patel', phone: '+91 98765 43214', email: 'kunal@email.com', feeStatus: 'overdue', status: 'active', admissionDate: '2023-06-15', slug: 'kunal-patel' },
  { id: 6, name: 'Ananya Reddy', rollNo: '006', class: 'Class 9-A', father: 'Kiran Reddy', phone: '+91 98765 43215', email: 'ananya@email.com', feeStatus: 'paid', status: 'active', admissionDate: '2024-01-18', slug: 'ananya-reddy' },
  { id: 7, name: 'Vikram Joshi', rollNo: '007', class: 'Class 12-A', father: 'Mohan Joshi', phone: '+91 98765 43216', email: 'vikram@email.com', feeStatus: 'paid', status: 'inactive', admissionDate: '2023-05-10', slug: 'vikram-joshi' },
  { id: 8, name: 'Meera Nair', rollNo: '008', class: 'Class 10-A', father: 'Gopal Nair', phone: '+91 98765 43217', email: 'meera@email.com', feeStatus: 'pending', status: 'active', admissionDate: '2024-01-20', slug: 'meera-nair' },
  { id: 9, name: 'Dev Sharma', rollNo: '009', class: 'Class 9-A', father: 'Kapil Sharma', phone: '+91 98765 43218', email: 'dev@email.com', feeStatus: 'paid', status: 'active', admissionDate: '2024-01-22', slug: 'dev-sharma' },
  { id: 10, name: 'Neha Kapoor', rollNo: '010', class: 'Class 10-B', father: 'Raj Kapoor', phone: '+91 98765 43219', email: 'neha@email.com', feeStatus: 'overdue', status: 'active', admissionDate: '2024-01-08', slug: 'neha-kapoor' },
];

export default function StudentManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [classFilter, setClassFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [feeFilter, setFeeFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           student.father.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClass = classFilter === 'all' || student.class === classFilter;
      const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
      const matchesFee = feeFilter === 'all' || student.feeStatus === feeFilter;
      return matchesSearch && matchesClass && matchesStatus && matchesFee;
    });
  }, [searchTerm, classFilter, statusFilter, feeFilter]);

  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredStudents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredStudents, currentPage, itemsPerPage]);

  const classOptions = [
    { value: 'all', label: 'All Classes' },
    { value: 'Class 10-A', label: 'Class 10-A' },
    { value: 'Class 10-B', label: 'Class 10-B' },
    { value: 'Class 9-A', label: 'Class 9-A' },
    { value: 'Class 9-B', label: 'Class 9-B' },
    { value: 'Class 11-A', label: 'Class 11-A' },
    { value: 'Class 12-A', label: 'Class 12-A' },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  const feeOptions = [
    { value: 'all', label: 'All Fee Status' },
    { value: 'paid', label: 'Paid' },
    { value: 'pending', label: 'Pending' },
    { value: 'overdue', label: 'Overdue' },
  ];

  return (
    <DashboardPage
      eyebrow="Student desk"
      title="Student Management"
      actions={
        <>
          <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
            <AppIcon name="add" size={16} />
            Add Student
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <AppIcon name="upload" size={16} />
            Import CSV
          </button>
        </>
      }
    >
      <MetricGrid>
        {studentStats.map((stat, index) => (
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

      <SectionCard title="All Students" description="Complete student records with fee and academic status">
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, roll number, or parent..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Dropdown value={classFilter} onChange={setClassFilter} options={classOptions} className="min-w-[140px]" />
            <Dropdown value={statusFilter} onChange={setStatusFilter} options={statusOptions} className="min-w-[130px]" />
            <Dropdown value={feeFilter} onChange={setFeeFilter} options={feeOptions} className="min-w-[140px]" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Roll No</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Student Name</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Class</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Parent / Contact</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Fee Status</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedStudents.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-500">
                    No students found matching your criteria.
                  </td>
                </tr>
              ) : (
                paginatedStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 text-sm font-medium text-slate-600">{student.rollNo}</td>
                    <td className="py-3 px-3">
                      <p className="font-semibold text-sm text-slate-900">{student.name}</p>
                      <p className="text-xs text-slate-500">{student.email}</p>
                    </td>
                    <td className="py-3 px-3 text-sm text-slate-700">{student.class}</td>
                    <td className="py-3 px-3">
                      <p className="text-sm text-slate-900">{student.father}</p>
                      <p className="text-xs text-slate-500">{student.phone}</p>
                    </td>
                    <td className="py-3 px-3">
                      <StatusBadge tone={student.feeStatus === 'paid' ? 'emerald' : student.feeStatus === 'pending' ? 'amber' : 'rose'}>
                        {student.feeStatus.charAt(0).toUpperCase() + student.feeStatus.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="py-3 px-3">
                      <StatusBadge tone={student.status === 'active' ? 'emerald' : 'slate'}>
                        {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1">
                        <Link 
                          to={`/dashboard/school/student/${student.slug}/dashboard`}
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

        {filteredStudents.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredStudents.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredStudents.length}
            className="mt-4"
          />
        )}
      </SectionCard>
    </DashboardPage>
  );
}
