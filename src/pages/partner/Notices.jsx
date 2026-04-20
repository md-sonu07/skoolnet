import { useState } from 'react';
import AppIcon from '../../components/common/AppIcon';
import {
  DashboardPage,
  SectionCard,
} from '../../components/common/DashboardPrimitives';

const notices = [
  { id: 1, title: 'System Maintenance', date: '2024-03-15', priority: 'high', content: 'Platform will undergo maintenance on March 20th, 2 AM - 6 AM IST.', target: 'All' },
  { id: 2, title: 'New Feature: Analytics Dashboard', date: '2024-03-10', priority: 'medium', content: 'Check out the new analytics features in your dashboard.', target: 'Partners' },
  { id: 3, title: 'Fee Structure Update', date: '2024-03-05', priority: 'medium', content: 'Updated pricing for new academic year 2024-25.', target: 'Schools' },
  { id: 4, title: 'Holiday Schedule', date: '2024-03-01', priority: 'low', content: 'Office will remain closed on Holi festival.', target: 'All' },
];

const priorityColors = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-slate-100 text-slate-700',
};

export default function PartnerNotices() {
  return (
    <DashboardPage
      eyebrow="Partner Dashboard"
      title="Notices"
      actions={
        <button type="button" className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
          <AppIcon name="add" size={16} />
          Create Notice
        </button>
      }
    >
      <SectionCard title="Notices" description="Important announcements and updates">
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="p-4 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-sm text-slate-900">{notice.title}</h3>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded-md ${priorityColors[notice.priority]}`}>
                    {notice.priority}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-blue-100 text-blue-700">
                    {notice.target}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-3">{notice.content}</p>
              <p className="text-xs text-slate-400">{notice.date}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </DashboardPage>
  );
}