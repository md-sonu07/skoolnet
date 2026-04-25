import { useState, useMemo } from 'react';
import AppIcon from '../../components/common/AppIcon';
import Dropdown from '../../components/common/Dropdown';
import Pagination from '../../components/common/Pagination';
import {
  DashboardPage,
  MetricCard,
  MetricGrid,
  SectionCard,
} from '../../components/common/DashboardPrimitives';

const partnerSchools = [
  {
    id: 1,
    name: 'Delhi Public School',
    address: 'Nehru Place, New Delhi',
    students: 450,
    teachers: 28,
    status: 'active',
    joinedDate: '2023-06-15',
    revenue: '₹1.2L',
  },
  {
    id: 2,
    name: "St. Mary's Academy",
    address: 'Civil Lines, Delhi',
    students: 320,
    teachers: 22,
    status: 'active',
    joinedDate: '2023-08-20',
    revenue: '₹85K',
  },
  {
    id: 3,
    name: 'Ryan International School',
    address: 'Vasant Kunj, Delhi',
    students: 280,
    teachers: 18,
    status: 'active',
    joinedDate: '2024-01-10',
    revenue: '₹72K',
  },
  {
    id: 4,
    name: 'Presidency School',
    address: 'Mayur Vihar, Delhi',
    students: 150,
    teachers: 12,
    status: 'pending',
    joinedDate: '2024-03-01',
    revenue: '₹45K',
  },
  {
    id: 5,
    name: 'Spring Dale College',
    address: 'Rajouri Garden, Delhi',
    students: 47,
    teachers: 8,
    status: 'active',
    joinedDate: '2024-02-15',
    revenue: '₹38K',
  },
];

const schoolStats = [
  { label: 'Total Schools', value: '5', change: '+2', helper: 'This year', tone: 'blue' },
  { label: 'Total Students', value: '1,247', change: '+156', helper: 'Enrolled', tone: 'emerald' },
  { label: 'Active Schools', value: '4', change: '+1', helper: 'This month', tone: 'green' },
  { label: 'Monthly Revenue', value: '₹3.2L', change: '+22%', helper: 'From schools', tone: 'amber' },
];

export default function PartnerSchools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredSchools = useMemo(() => {
    return partnerSchools.filter(school => {
      const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           school.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || school.status === statusFilter;
      
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const paginatedSchools = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSchools.slice(startIndex, endIndex);
  }, [filteredSchools, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
  ];

  return (
    <DashboardPage
      eyebrow="Partner Management"
      title="My Schools"
      actions={
        <>
          <button type="button" className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
            <AppIcon name="add" size={16} />
            Add School
          </button>
        </>
      }
    >
      <MetricGrid>
        {schoolStats.map((stat, index) => {
          const icons = {
            'Total Schools': 'school',
            'Total Students': 'group',
            'Active Schools': 'check_circle',
            'Monthly Revenue': 'payments',
          };
          return (
            <MetricCard
              key={index}
              icon={icons[stat.label] || 'analytics'}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              helper={stat.helper}
              tone={stat.tone}
            />
          );
        })}
      </MetricGrid>

      <SectionCard title="My Schools" description="Schools managed under your partnership">
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Dropdown
              value={statusFilter}
              onChange={setStatusFilter}
              options={statusOptions}
              className="min-w-30"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">School</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Students</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Teachers</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Revenue</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Joined</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="text-left py-2 pl-7 pr-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSchools.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-500">
                    No schools found.
                  </td>
                </tr>
              ) : (
                paginatedSchools.map((school) => (
                  <tr key={school.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3">
                      <div>
                        <p className="font-semibold text-sm text-slate-900 capitalize">{school.name}</p>
                        <p className="text-xs text-slate-500">{school.address}</p>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <p className="font-medium text-sm text-slate-900">{school.students}</p>
                    </td>
                    <td className="py-3 px-3">
                      <p className="text-sm text-slate-600">{school.teachers}</p>
                    </td>
                    <td className="py-3 px-3">
                      <p className="font-semibold text-sm text-slate-900">{school.revenue}</p>
                    </td>
                    <td className="py-3 px-3">
                      <p className="text-sm text-slate-600">{school.joinedDate}</p>
                    </td>
                    <td className="py-3 px-3">
                      <div className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${
                        school.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          school.status === 'active' ? 'bg-emerald-500' : 'bg-amber-500'
                        }`} />
                        <span className="capitalize">{school.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1">
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors">
                          <AppIcon name="visibility" size={14} className="text-slate-600" />
                        </button>
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors">
                          <AppIcon name="edit" size={14} className="text-slate-600" />
                        </button>
                        <button className="p-2 rounded hover:bg-slate-100 transition-colors">
                          <AppIcon name="more_vert" size={14} className="text-slate-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {filteredSchools.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={filteredSchools.length}
            className="mt-4"
          />
        )}
      </SectionCard>
    </DashboardPage>
  );
}