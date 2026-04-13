import { useState } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';

const notices = [
  { id: 1, title: 'Parent-Teacher Meeting', date: '2024-01-20', category: 'Event', priority: 'high', description: 'A P.T.M is scheduled for this Saturday at 10:00 AM. Parents are requested to attend.' },
  { id: 2, title: 'Holiday Notice - Republic Day', date: '2024-01-26', category: 'Holiday', priority: 'normal', description: 'School will remain closed on 26th January 2024 on account of Republic Day.' },
  { id: 3, title: 'Annual Exam Schedule', date: '2024-01-22', category: 'Academic', priority: 'high', description: 'The annual examination will start from 15th February 2024. Detailed schedule attached.' },
  { id: 4, title: 'Science Fair Registration', date: '2024-01-18', category: 'Activity', priority: 'normal', description: 'Students interested in participating in the science fair can register by 25th January.' },
  { id: 5, title: 'Uniform Distribution', date: '2024-01-15', category: 'General', priority: 'low', description: 'New uniforms can be collected from the school store from 10th February.' },
];

export default function StudentNotices() {
  const [filter, setFilter] = useState('all');

  const filteredNotices = notices.filter(n => 
    filter === 'all' || n.category === filter
  );

  return (
    <DashboardPage
      eyebrow="Communication"
      title="Notices"
      description="Stay updated with school announcements"
    >
      <div className="flex gap-2 mb-6 flex-wrap">
        {['all', 'Event', 'Holiday', 'Academic', 'Activity', 'General'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              filter === f 
                ? 'bg-primary text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {f === 'all' ? 'All' : f}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredNotices.map(notice => (
          <div key={notice.id} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{notice.title}</h3>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <AppIcon name="event" size={14} />
                    <span>{notice.date}</span>
                  </div>
                  <StatusBadge tone={notice.category === 'Event' ? 'blue' : notice.category === 'Holiday' ? 'emerald' : 'purple'}>
                    {notice.category}
                  </StatusBadge>
                </div>
              </div>
              {notice.priority === 'high' && (
                <StatusBadge tone="rose">Important</StatusBadge>
              )}
            </div>
            <p className="text-sm text-slate-600 mb-4">{notice.description}</p>
            <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                <AppIcon name="download" size={16} />
                Download Attachment
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardPage>
  );
}