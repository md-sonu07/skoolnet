import { useOutletContext } from 'react-router-dom';
import AppIcon from '../../components/common/AppIcon';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../components/common/DashboardPrimitives';

const coachingInfo = {
  name: 'Apex Coaching Center',
  address: '123, Main Road, Sector 15',
  city: 'Delhi',
  state: 'New Delhi',
  phone: '+91 98765 43210',
  email: 'apex@coaching.com',
  website: 'www.apexcoaching.com',
  established: '2018',
  totalStudents: 1284,
  totalTeachers: 24,
  courses: 8,
};

export default function CoachingProfile() {
  const { coachingName } = useOutletContext();
  
  return (
    <DashboardPage
      eyebrow="Admin profile"
      title="Coaching Profile"
    >
      <SectionCard title="Basic Information" description="Your coaching center details">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <AppIcon name="school" size={24} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Coaching Name</p>
              <p className="text-lg font-bold text-slate-900">{coachingInfo.name}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <AppIcon name="location_on" size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Address</p>
              <p className="text-sm font-medium text-slate-900">{coachingInfo.address}</p>
              <p className="text-xs text-slate-500">{coachingInfo.city}, {coachingInfo.state}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <AppIcon name="phone" size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Phone</p>
              <p className="text-sm font-medium text-slate-900">{coachingInfo.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <AppIcon name="mail" size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Email</p>
              <p className="text-sm font-medium text-slate-900">{coachingInfo.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <AppIcon name="language" size={20} className="text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Website</p>
              <p className="text-sm font-medium text-slate-900">{coachingInfo.website}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
              <AppIcon name="calendar_today" size={20} className="text-rose-600" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Established</p>
              <p className="text-sm font-medium text-slate-900">{coachingInfo.established}</p>
            </div>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Statistics" description="Your coaching at a glance">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <AppIcon name="group" size={24} className="text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">{coachingInfo.totalStudents}</p>
            <p className="text-xs text-slate-500">Total Students</p>
          </div>
          <div className="text-center p-4 bg-emerald-50 rounded-xl">
            <AppIcon name="school" size={24} className="text-emerald-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">{coachingInfo.totalTeachers}</p>
            <p className="text-xs text-slate-500">Teachers</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <AppIcon name="menu_book" size={24} className="text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">{coachingInfo.courses}</p>
            <p className="text-xs text-slate-500">Active Courses</p>
          </div>
          <div className="text-center p-4 bg-amber-50 rounded-xl">
            <AppIcon name="trending_up" size={24} className="text-amber-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">4.5</p>
            <p className="text-xs text-slate-500">Avg Rating</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="Account Status">
        <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl">
          <div className="flex items-center gap-3">
            <AppIcon name="check_circle" size={24} className="text-emerald-600" />
            <div>
              <p className="font-bold text-slate-900">Active Account</p>
              <p className="text-sm text-slate-500">Your coaching is verified and active</p>
            </div>
          </div>
          <StatusBadge tone="emerald">Verified</StatusBadge>
        </div>
      </SectionCard>
    </DashboardPage>
  );
}