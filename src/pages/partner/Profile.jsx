import { useState } from 'react';
import AppIcon from '../../components/common/AppIcon';
import {
  DashboardPage,
  SectionCard,
} from '../../components/common/DashboardPrimitives';

export default function PartnerProfile() {
  const [editing, setEditing] = useState(false);

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
                    defaultValue="Partner Admin"
                    disabled={!editing}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    defaultValue="Partner Organization"
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
                    defaultValue="partner@example.com"
                    disabled={!editing}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+91 98765 43210"
                    disabled={!editing}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <textarea
                  defaultValue="123 Business Park, Delhi, India"
                  disabled={!editing}
                  rows={2}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:bg-slate-50"
                />
              </div>
              <button
                onClick={() => setEditing(!editing)}
                className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                {editing ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Partnership Details" description="Your partnership information">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Partner ID</p>
                  <p className="font-semibold text-slate-900">PRT-2024-001</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Partner Since</p>
                  <p className="font-semibold text-slate-900">June 2023</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Partner Type</p>
                  <p className="font-semibold text-slate-900">Education Partner</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50">
                  <p className="text-xs text-slate-500 mb-1">Status</p>
                  <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-700">
                    Active
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