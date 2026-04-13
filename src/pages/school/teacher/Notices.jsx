import { useState } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';
import Dropdown from '../../../components/common/Dropdown';

const mockNotices = [
  { id: 1, title: 'Math Exam Schedule - Unit Test 3', class: 'Class 10-A, Class 10-B', date: '2024-01-15', status: 'published', views: 156 },
  { id: 2, title: 'Holiday Notice - Republic Day', class: 'All Classes', date: '2024-01-20', status: 'published', views: 320 },
  { id: 3, title: 'Parent Teacher Meeting', class: 'Class 9-A, Class 9-B', date: '2024-01-18', status: 'published', views: 98 },
  { id: 4, title: 'Assignment Deadline Extension', class: 'Class 10-A', date: '2024-01-16', status: 'draft', views: 0 },
];

export default function TeacherNotices() {
  const [selectedClass, setSelectedClass] = useState('all');

  const filteredNotices = mockNotices.filter(n => 
    selectedClass === 'all' || n.class.includes(selectedClass.replace('Class ', '')) || n.class === 'All Classes'
  );

  return (
    <DashboardPage
      eyebrow="Communication"
      title="Notices"
      description="Post and manage notices for your classes"
    >
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <AppIcon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search notices..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary/30 focus:ring-2 focus:ring-primary/10 text-sm"
            />
          </div>
        </div>
        <Dropdown
          options={[
            { label: 'All Classes', value: 'all' },
            { label: 'Class 10-A', value: 'Class 10-A' },
            { label: 'Class 10-B', value: 'Class 10-B' },
            { label: 'Class 9-A', value: 'Class 9-A' },
            { label: 'Class 9-B', value: 'Class 9-B' },
          ]}
          value={selectedClass}
          onChange={setSelectedClass}
        />
      </div>

      <div className="space-y-4">
        {filteredNotices.map(notice => (
          <div key={notice.id} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{notice.title}</h3>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <AppIcon name="group" size={14} />
                    <span>{notice.class}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AppIcon name="event" size={14} />
                    <span>{notice.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AppIcon name="visibility" size={14} />
                    <span>{notice.views} views</span>
                  </div>
                </div>
              </div>
              <StatusBadge tone={notice.status === 'published' ? 'emerald' : 'amber'}>
                {notice.status}
              </StatusBadge>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-primary">
                <AppIcon name="visibility" size={18} />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-primary">
                <AppIcon name="edit" size={18} />
              </button>
              {notice.status === 'draft' && (
                <button className="p-2 rounded-lg hover:bg-emerald-50 text-slate-500 hover:text-emerald-600">
                  <AppIcon name="send" size={18} />
                </button>
              )}
              <button className="p-2 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-600">
                <AppIcon name="delete" size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardPage>
  );
}