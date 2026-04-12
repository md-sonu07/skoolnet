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

const noticeStats = [
  { icon: 'campaign', label: 'Total Notices', value: '47', change: '+5', helper: 'This month', tone: 'blue' },
  { icon: 'publish', label: 'Published', value: '38', change: '+3', helper: 'Active', tone: 'emerald' },
  { icon: 'schedule', label: 'Scheduled', value: '6', change: '2 pending', helper: 'Future', tone: 'amber' },
  { icon: 'drafts', label: 'Drafts', value: '3', change: '-', helper: 'In progress', tone: 'slate' },
  { icon: 'groups', label: 'Audience', value: '3', change: 'Groups', helper: 'Targeted', tone: 'purple' },
  { icon: 'visibility', label: 'Views', value: '2.4K', change: '+320', helper: 'Total', tone: 'rose' },
];

const notices = [
  { id: 1, title: 'Annual Day Celebration', audience: 'All Students', postedBy: 'Principal', date: '2024-01-25', status: 'published', priority: 'high', views: 450 },
  { id: 2, title: 'Exam Schedule - Final Term', audience: 'Class 9-12', postedBy: 'Academic Head', date: '2024-01-24', status: 'published', priority: 'high', views: 820 },
  { id: 3, title: 'Parent Teacher Meeting', audience: 'All Parents', postedBy: 'Admin Office', date: '2024-01-23', status: 'published', priority: 'medium', views: 320 },
  { id: 4, title: 'Holiday Notice - Republic Day', audience: 'All', postedBy: 'Admin Office', date: '2024-01-22', status: 'published', priority: 'high', views: 1100 },
  { id: 5, title: 'Sports Day Registration', audience: 'Class 6-10', postedBy: 'Sports Director', date: '2024-01-28', status: 'scheduled', priority: 'medium', views: 0 },
  { id: 6, title: 'Library Book Return Deadline', audience: 'All Students', postedBy: 'Librarian', date: '2024-01-20', status: 'published', priority: 'low', views: 280 },
  { id: 7, title: 'Fee Payment Reminder', audience: 'Parents', postedBy: 'Finance', date: '2024-01-18', status: 'published', priority: 'medium', views: 520 },
  { id: 8, title: 'Science Exhibition', audience: 'Class 11-12', postedBy: 'Science HOD', date: '2024-02-05', status: 'scheduled', priority: 'medium', views: 0 },
  { id: 9, title: 'New Uniform Supplier', audience: 'All Parents', postedBy: 'Admin Office', date: '2024-01-15', status: 'draft', priority: 'low', views: 0 },
  { id: 10, title: 'Transport Route Changes', audience: 'Transport Users', postedBy: 'Transport Manager', date: '2024-01-30', status: 'scheduled', priority: 'high', views: 0 },
];

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [audienceFilter, setAudienceFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredNotices = useMemo(() => {
    return notices.filter(notice => {
      const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           notice.postedBy.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesAudience = audienceFilter === 'all' || notice.audience === audienceFilter;
      const matchesStatus = statusFilter === 'all' || notice.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || notice.priority === priorityFilter;
      return matchesSearch && matchesAudience && matchesStatus && matchesPriority;
    });
  }, [searchTerm, audienceFilter, statusFilter, priorityFilter]);

  const paginatedNotices = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredNotices.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredNotices, currentPage, itemsPerPage]);

  const audienceOptions = [
    { value: 'all', label: 'All Audience' },
    { value: 'All', label: 'All' },
    { value: 'All Students', label: 'All Students' },
    { value: 'All Parents', label: 'All Parents' },
    { value: 'Class 9-12', label: 'Class 9-12' },
    { value: 'Class 6-10', label: 'Class 6-10' },
    { value: 'Class 11-12', label: 'Class 11-12' },
    { value: 'Parents', label: 'Parents' },
    { value: 'Transport Users', label: 'Transport Users' },
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'published', label: 'Published' },
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'draft', label: 'Draft' },
  ];

  const priorityOptions = [
    { value: 'all', label: 'All Priority' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];

  const getStatusTone = (status) => {
    switch(status) {
      case 'published': return 'emerald';
      case 'scheduled': return 'amber';
      case 'draft': return 'slate';
      default: return 'slate';
    }
  };

  const getPriorityTone = (priority) => {
    switch(priority) {
      case 'high': return 'rose';
      case 'medium': return 'amber';
      case 'low': return 'slate';
      default: return 'slate';
    }
  };

  return (
    <DashboardPage
      eyebrow="Announcements"
      title="Notices & Announcements"
      actions={
        <>
          <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
            <AppIcon name="add" size={16} />
            Create Notice
          </button>
          <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
            <AppIcon name="download" size={16} />
            Export
          </button>
        </>
      }
    >
      <MetricGrid>
        {noticeStats.map((stat, index) => (
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

      <SectionCard title="All Notices" description="School notices and announcements">
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Dropdown value={audienceFilter} onChange={setAudienceFilter} options={audienceOptions} className="min-w-[140px]" />
            <Dropdown value={statusFilter} onChange={setStatusFilter} options={statusOptions} className="min-w-[130px]" />
            <Dropdown value={priorityFilter} onChange={setPriorityFilter} options={priorityOptions} className="min-w-[130px]" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Title</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Audience</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Posted By</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Date</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Priority</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Status</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Views</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-slate-600 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedNotices.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-8 text-center text-slate-500">
                    No notices found.
                  </td>
                </tr>
              ) : (
                paginatedNotices.map((notice) => (
                  <tr key={notice.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3">
                      <p className="font-semibold text-sm text-slate-900">{notice.title}</p>
                    </td>
                    <td className="py-3 px-3 text-sm text-slate-700">{notice.audience}</td>
                    <td className="py-3 px-3 text-sm text-slate-600">{notice.postedBy}</td>
                    <td className="py-3 px-3 text-sm text-slate-600">{notice.date}</td>
                    <td className="py-3 px-3">
                      <StatusBadge tone={getPriorityTone(notice.priority)}>
                        {notice.priority.charAt(0).toUpperCase() + notice.priority.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="py-3 px-3">
                      <StatusBadge tone={getStatusTone(notice.status)}>
                        {notice.status.charAt(0).toUpperCase() + notice.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="py-3 px-3 text-sm text-slate-600">{notice.views.toLocaleString()}</td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-1">
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

        {filteredNotices.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredNotices.length / itemsPerPage)}
            onPageChange={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={filteredNotices.length}
            className="mt-4"
          />
        )}
      </SectionCard>
    </DashboardPage>
  );
}