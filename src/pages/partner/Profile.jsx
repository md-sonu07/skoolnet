import { useState } from 'react';
import AppIcon from '../../components/common/AppIcon';
import {
  DashboardPage,
  SectionCard,
} from '../../components/common/DashboardPrimitives';
import { usePartnerAuth } from '../../hooks/api/usePartnerAuth';

export default function PartnerProfile() {
  const [editing, setEditing] = useState(false);
  const { user, isLoadingProfile } = usePartnerAuth();

  if (isLoadingProfile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AppIcon name="sync" size={32} className="animate-spin text-primary" />
      </div>
    );
  }

  const partnerInfo = {
    name: user?.name || user?.username || 'Partner Admin',
    company: user?.organization?.name || 'Partner Organization',
    email: user?.email || 'partner@example.com',
    phone: user?.phone || '+91 98765 43210',
    address: user?.address || '123 Business Park, Delhi, India',
    id: user?.id ? `PRT-2024-${user.id.toString().padStart(3, '0')}` : 'PRT-2024-001',
    since: user?.date_joined?.split('T')[0] || 'June 2023',
    status: user?.is_active ? 'Active' : 'Inactive',
  };

  return (
    <DashboardPage
      eyebrow="Partner Dashboard"
      title="Profile"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SectionCard title="Profile Picture" description="Your partner profile">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-slate-200 flex items-center justify-center mb-4">
              <AppIcon name="person" size={48} className="text-slate-500" />
            </div>
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all">
              Change Photo
            </button>
          </div>
        </SectionCard>

        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="Personal Information" description="Your profile details">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    defaultValue={partnerInfo.name}
                    disabled={!editing}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    defaultValue={partnerInfo.company}
                    disabled={!editing}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    defaultValue={partnerInfo.email}
                    disabled={!editing}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    defaultValue={partnerInfo.phone}
                    disabled={!editing}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <textarea
                  defaultValue={partnerInfo.address}
                  disabled={!editing}
                  rows={2}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                />
              </div>
              {editing && (
                <button
                  onClick={() => setEditing(false)}
                  className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Save Changes
                </button>
              )}
              {!editing && (
                <button
                  onClick={() => setEditing(true)}
                  className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </SectionCard>

          <SectionCard title="Partnership Details" description="Your partnership information">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Partner ID</p>
                  <p className="font-semibold text-slate-900">{partnerInfo.id}</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Partner Since</p>
                  <p className="font-semibold text-slate-900">{partnerInfo.since}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Partner Type</p>
                  <p className="font-semibold text-slate-900">Education Partner</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Status</p>
                  <span className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ${partnerInfo.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {partnerInfo.status}
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </DashboardPage>
  );
}