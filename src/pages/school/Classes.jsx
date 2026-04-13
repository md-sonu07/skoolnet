import { useState, useMemo } from 'react';
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

const classStats = [
  { icon: 'school', label: 'Total Classes', value: '12', change: 'Stable', helper: 'Active', tone: 'blue' },
  { icon: 'group', label: 'Total Sections', value: '24', change: '+2', helper: 'From last year', tone: 'emerald' },
  { icon: 'people', label: 'Students', value: '1,284', change: '+72', helper: 'Enrolled', tone: 'purple' },
  { icon: 'how_to_reg', label: 'Class Teachers', value: '12', change: 'Full', helper: 'Assigned', tone: 'green' },
];

const classes = [
  { id: 1, name: 'Class 10-A', section: 'A', classTeacher: 'Ms. Priya Sharma', students: 42, subjects: 5, status: 'active', room: 'Room 101' },
  { id: 2, name: 'Class 10-B', section: 'B', classTeacher: 'Ms. Sneha Gupta', students: 38, subjects: 5, status: 'active', room: 'Room 102' },
  { id: 3, name: 'Class 9-A', section: 'A', classTeacher: 'Mr. Rahul Verma', students: 45, subjects: 6, status: 'active', room: 'Room 103' },
  { id: 4, name: 'Class 9-B', section: 'B', classTeacher: 'Unassigned', students: 40, subjects: 6, status: 'active', room: 'Room 104' },
  { id: 5, name: 'Class 11-A', section: 'A', classTeacher: 'Mr. Vikram Patel', students: 35, subjects: 5, status: 'active', room: 'Room 201' },
  { id: 6, name: 'Class 11-B', section: 'B', classTeacher: 'Ms. Ananya Reddy', students: 32, subjects: 5, status: 'active', room: 'Room 202' },
  { id: 7, name: 'Class 12-A', section: 'A', classTeacher: 'Dr. Rajesh Kumar', students: 30, subjects: 5, status: 'active', room: 'Room 301' },
];

export default function ClassManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredClasses = useMemo(() => {
    return classes.filter(cls => {
      const matchesSearch = cls.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           cls.classTeacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cls.section.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || cls.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const paginatedClasses = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredClasses.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredClasses, currentPage, itemsPerPage]);

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];

  return (
    <DashboardPage
      eyebrow="Academic structure"
      title="Class Management"
      actions={
        <>
          <button className="px-3 md:px-5 py-2 md:py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-1 md:gap-2">
            <AppIcon name="add" size={16} />
            <span className="hidden md:inline">Add Class</span>
          </button>
          <button className="px-3 md:px-5 py-2 md:py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-1 md:gap-2 shadow-sm">
            <AppIcon name="upload" size={16} />
            <span className="hidden md:inline">Import CSV</span>
          </button>
        </>
      }
    >
      <MetricGrid>
        {classStats.map((stat, index) => (
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

      <SectionCard title="All Classes" description="Class and section management with assigned teachers">
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by class, section, or teacher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Dropdown value={statusFilter} onChange={setStatusFilter} options={statusOptions} className="min-w-[140px]" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Class</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">Section</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Class Teacher</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">Students</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase hidden sm:table-cell">Subjects</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase hidden md:table-cell">Room</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedClasses.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-slate-500">
                    No classes found matching your criteria.
                  </td>
                </tr>
              ) : (
                paginatedClasses.map((cls) => (
                  <tr key={cls.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3 text-sm font-semibold text-slate-900">{cls.name}</td>
                    <td className="py-3 px-3 text-sm text-slate-700 hidden sm:table-cell">{cls.section}</td>
                    <td className="py-3 px-3 text-sm">
                      <span className={cls.classTeacher === 'Unassigned' ? 'text-amber-600' : 'text-slate-900'}>
                        {cls.classTeacher}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-sm text-slate-700 hidden md:table-cell">{cls.students}</td>
                    <td className="py-3 px-3 text-sm text-slate-700 hidden sm:table-cell">{cls.subjects}</td>
                    <td className="py-3 px-3 text-sm text-slate-600 hidden md:table-cell">{cls.room}</td>
                    <td className="py-3 px-3">
                      <StatusBadge tone={cls.status === 'active' ? 'emerald' : 'slate'}>
                        {cls.status.charAt(0).toUpperCase() + cls.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1">
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors"><AppIcon name="visibility" size={14} className="text-slate-600" /></button>
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors hidden sm:block"><AppIcon name="edit" size={14} className="text-slate-600" /></button>
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors"><AppIcon name="more_vert" size={14} className="text-slate-600" /></button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {filteredClasses.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredClasses.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredClasses.length}
            className="mt-4"
          />
        )}
      </SectionCard>
    </DashboardPage>
  );
}
