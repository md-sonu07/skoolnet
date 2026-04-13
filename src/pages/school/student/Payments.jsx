import { useState } from 'react';
import {
  DashboardPage,
  SectionCard,
  StatusBadge,
  MetricCard,
  MetricGrid,
} from '../../../components/common/DashboardPrimitives';
import AppIcon from '../../../components/common/AppIcon';

const feeRecords = [
  { id: 1, title: 'Tuition Fee', amount: 15000, paid: 15000, dueDate: '2024-01-15', status: 'paid', month: 'January 2024' },
  { id: 2, title: 'Transport Fee', amount: 3000, paid: 3000, dueDate: '2024-01-15', status: 'paid', month: 'January 2024' },
  { id: 3, title: 'Library Fee', amount: 1000, paid: 1000, dueDate: '2024-01-15', status: 'paid', month: 'January 2024' },
  { id: 4, title: 'Tuition Fee', amount: 15000, paid: 0, dueDate: '2024-02-15', status: 'pending', month: 'February 2024' },
  { id: 5, title: 'Transport Fee', amount: 3000, paid: 0, dueDate: '2024-02-15', status: 'pending', month: 'February 2024' },
];

export default function StudentFees() {
  const totalFee = feeRecords.reduce((sum, f) => sum + f.amount, 0);
  const totalPaid = feeRecords.reduce((sum, f) => sum + f.paid, 0);
  const totalPending = totalFee - totalPaid;

  return (
    <DashboardPage
      eyebrow="Finance"
      title="Fees"
      description="View and pay your school fees"
    >
      <MetricGrid>
        <MetricCard icon="account_balance_wallet" label="Total Fee" value={`₹${totalFee.toLocaleString()}`} change="Annual" helper="This academic year" />
        <MetricCard icon="check_circle" label="Paid" value={`₹${totalPaid.toLocaleString()}`} change="Paid" helper="This year" tone="emerald" />
        <MetricCard icon="schedule" label="Pending" value={`₹${totalPending.toLocaleString()}`} change="Due" helper="Next payment" tone="amber" />
      </MetricGrid>

      <SectionCard title="Fee History" description="All your fee transactions">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Month</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Particulars</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Paid</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Due Date</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {feeRecords.map(fee => (
                <tr key={fee.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-4 text-slate-600">{fee.month}</td>
                  <td className="py-3 px-4 font-medium text-slate-900">{fee.title}</td>
                  <td className="py-3 px-4 text-slate-600">₹{fee.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-slate-600">₹{fee.paid.toLocaleString()}</td>
                  <td className="py-3 px-4 text-slate-600">{fee.dueDate}</td>
                  <td className="py-3 px-4">
                    <StatusBadge tone={fee.status === 'paid' ? 'emerald' : 'amber'}>
                      {fee.status === 'paid' ? 'Paid' : 'Pending'}
                    </StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {totalPending > 0 && (
        <SectionCard title="Pay Now" description="Clear your pending fees" className="mt-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <div>
              <p className="font-semibold text-slate-900">Pending Amount</p>
              <p className="text-2xl font-bold text-amber-700">₹{totalPending.toLocaleString()}</p>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
              Pay Now
            </button>
          </div>
        </SectionCard>
      )}
    </DashboardPage>
  );
}