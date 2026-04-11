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

const partnerStats = [
  { label: 'Total Partners', value: '127', change: '+8', helper: 'Active partners', tone: 'blue' },
  { label: 'Revenue Share', value: '₹24.3L', change: '+22%', helper: 'This month', tone: 'purple' },
  { label: 'New Leads', value: '43', change: '+12', helper: 'This week', tone: 'emerald' },
  { label: 'Contracts', value: '89', change: '5 expiring', helper: 'Active agreements', tone: 'amber' },
  { label: 'Satisfaction', value: '4.6', change: '+0.3', helper: 'Average rating', tone: 'green' },
  { label: 'Support', value: '15', change: '-3', helper: 'Open tickets', tone: 'rose' },
];

const partners = [
  {
    id: 1,
    name: 'Tech Solutions Inc',
    contact: 'David Kumar',
    email: 'david@techsolutions.com',
    phone: '+91 98765 43210',
    type: 'Technology',
    status: 'online',
    joinDate: '2023-01-15',
    revenue: '₹3.2L',
    rating: 4.8,
    lastActive: '2024-03-15'
  },
  {
    id: 2,
    name: 'Education First',
    contact: 'Sarah Williams',
    email: 'sarah@educationfirst.com',
    phone: '+91 98765 43211',
    type: 'Education',
    status: 'online',
    joinDate: '2023-03-22',
    revenue: '₹2.8L',
    rating: 4.5,
    lastActive: '2024-03-14'
  },
  {
    id: 3,
    name: 'Global Education Hub',
    contact: 'Michael Chen',
    email: 'michael@gehub.com',
    phone: '+91 98765 43212',
    type: 'Strategic Partner',
    status: 'offline',
    joinDate: '2024-01-05',
    revenue: '₹1.5L',
    rating: 4.2,
    lastActive: '2024-03-10'
  },
];

export default function Partners() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredPartners = useMemo(() => {
    return partners.filter(partner => {
      const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           partner.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           partner.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || partner.status === statusFilter;
      const matchesType = typeFilter === 'all' || partner.type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [searchTerm, statusFilter, typeFilter]);

  const paginatedPartners = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredPartners.slice(startIndex, endIndex);
  }, [filteredPartners, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredPartners.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
  ];

  const typeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Education', label: 'Education' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Consulting', label: 'Consulting' },
  ];

  return (
    <DashboardPage
      eyebrow="Partner Management"
      title="Partners Overview"
      actions={
        <>
          <button type="button" className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
            <AppIcon name="add" size={16} />
            Add Partner
          </button>
          <button type="button" className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-on-surface hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <AppIcon name="download" size={16} className="text-primary" />
            Export Data
          </button>
        </>
      }
    >
      <MetricGrid>
        {partnerStats.map((stat, index) => {
          const icons = {
            'Total Partners': 'group',
            'Revenue Share': 'payments',
            'New Leads': 'trending_up',
            'Contracts': 'description',
            'Satisfaction': 'star',
            'Support': 'support'
          };
          return (
            <MetricCard
              key={index}
              icon={icons[stat.label] || 'group'}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              helper={stat.helper}
              tone={stat.tone}
            />
          );
        })}
      </MetricGrid>

      <SectionCard title="All Partners" description="Complete list of business partners with their details">
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search partners..."
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
            <Dropdown
              value={typeFilter}
              onChange={setTypeFilter}
              options={typeOptions}
              className="min-w-35"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Partner</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Contact</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Revenue</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Last Active</th>
                <th className="text-left py-2 px-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                <th className="text-left py-2 pl-7 pr-3 text-xs font-semibold text-slate-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPartners.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-slate-500">
                    No partners found matching your criteria.
                  </td>
                </tr>
              ) : (
                paginatedPartners.map((partner) => (
                  <tr key={partner.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3">
                      <div>
                        <p className="font-semibold text-sm text-slate-900">{partner.name}</p>
                        <p className="text-xs text-slate-500">Joined: {partner.joinDate}</p>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <div>
                        <p className="font-medium text-sm text-slate-900">{partner.contact}</p>
                        <p className="text-xs text-slate-500 truncate max-w-[150px]">{partner.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <p className="font-semibold text-sm text-slate-900">{partner.revenue}</p>
                    </td>
                    <td className="py-3 px-3">
                      <p className="text-sm text-slate-600">{partner.lastActive}</p>
                    </td>
                    <td className="py-3 px-3">
                      <div className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${
                        partner.status === 'online' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          partner.status === 'online' ? 'bg-emerald-500' : 'bg-gray-500'
                        }`} />
                        <span className="capitalize">{partner.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 ">
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
        
        {filteredPartners.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={filteredPartners.length}
            className="mt-4"
          />
        )}
      </SectionCard>
    </DashboardPage>
  );
}
