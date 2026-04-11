export const coachingNavItems = [
  { label: 'Overview', icon: 'dashboard', to: 'overview' },
  { label: 'Students', icon: 'group', to: 'students' },
  { label: 'Batches', icon: 'group', to: 'batches' },
  { label: 'Attendance', icon: 'monitoring', to: 'attendance' },
  { label: 'Payments', icon: 'payments', to: 'payments' },
  { label: 'Schedule', icon: 'calendar_today', to: 'schedule' },
];

export const coachingHeader = {
  badge: 'Coaching Dashboard',
  title: 'Batch and growth desk',
  description:
    'Manage batch schedules, trainers, student outcomes, and coaching center performance from one workspace.',
  quickActions: [
    { label: 'Create batch', icon: 'group' },
    { label: 'Performance view', icon: 'monitoring', variant: 'secondary' },
  ],
};

export const coachingSidebarContent = {
  badge: 'Coaching Ops',
  title: 'Center dashboard',
  description:
    'This dashboard keeps day-to-day coaching operations visible across batches, trainers, and performance.',
};
