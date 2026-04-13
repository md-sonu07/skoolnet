import { useState } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';

const studentData = {
  name: 'Aarav Sharma',
  rollNo: '001',
  class: 'Class 10-A',
  section: 'A',
  dob: '2008-05-15',
  gender: 'Male',
  bloodGroup: 'B+',
  phone: '+91 98765 43210',
  email: 'aarav@email.com',
  address: '123, Gandhi Nagar, City - 123456',
  fatherName: 'Rajesh Sharma',
  motherName: 'Sunita Sharma',
  fatherPhone: '+91 98765 43211',
  emergencyPhone: '+91 98765 43212',
  admissionDate: '2024-01-15',
};

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <DashboardPage
      eyebrow="Account"
      title="My Profile"
      description="View and manage your profile information"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Profile Picture" description="" className="lg:col-span-1">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl bg-slate-200 flex items-center justify-center mb-4">
              <AppIcon name="person" size={64} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{studentData.name}</h3>
            <p className="text-sm text-slate-600 mb-3">Roll No: {studentData.rollNo}</p>
            <StatusBadge tone="emerald">Active</StatusBadge>
          </div>
        </SectionCard>

        <div className="lg:col-span-2 space-y-6">
          <SectionCard title="Personal Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                <p className="text-slate-900 font-medium">{studentData.name}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Date of Birth</label>
                <p className="text-slate-900 font-medium">{studentData.dob}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Gender</label>
                <p className="text-slate-900 font-medium">{studentData.gender}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Blood Group</label>
                <p className="text-slate-900 font-medium">{studentData.bloodGroup}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Phone</label>
                <p className="text-slate-900 font-medium">{studentData.phone}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
                <p className="text-slate-900 font-medium">{studentData.email}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-slate-500 mb-1">Address</label>
                <p className="text-slate-900 font-medium">{studentData.address}</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Academic Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Class</label>
                <p className="text-slate-900 font-medium">{studentData.class}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Section</label>
                <p className="text-slate-900 font-medium">{studentData.section}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Roll Number</label>
                <p className="text-slate-900 font-medium">{studentData.rollNo}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Admission Date</label>
                <p className="text-slate-900 font-medium">{studentData.admissionDate}</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Parent Information" description="">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Father's Name</label>
                <p className="text-slate-900 font-medium">{studentData.fatherName}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Mother's Name</label>
                <p className="text-slate-900 font-medium">{studentData.motherName}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Father's Phone</label>
                <p className="text-slate-900 font-medium">{studentData.fatherPhone}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Emergency Contact</label>
                <p className="text-slate-900 font-medium">{studentData.emergencyPhone}</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </DashboardPage>
  );
}