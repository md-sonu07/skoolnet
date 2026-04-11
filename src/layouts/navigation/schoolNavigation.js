export const schoolNavItems = [
  { label: 'Overview', icon: 'dashboard', to: 'overview' },
  { label: 'Students', icon: 'group', to: 'students' },
  { label: 'Teachers', icon: 'how_to_reg', to: 'teachers' },
  { label: 'Classes', icon: 'school', to: 'classes' },
  { label: 'Attendance', icon: 'monitoring', to: 'attendance' },
  { label: 'Assignments', icon: 'folder_open', to: 'assignments' },
  { label: 'Reports', icon: 'analytics', to: 'reports' },
  { label: 'Settings', icon: 'settings', to: 'settings' },
];

export const schoolHeader = {
  badge: 'School Dashboard',
  title: 'Campus operations',
  description:
    'Run admissions, faculty coordination, daily attendance, and school-wide performance from one focused workspace.',
  quickActions: [
    { label: 'New admission', icon: 'how_to_reg' },
    { label: 'Attendance report', icon: 'monitoring', variant: 'secondary' },
  ],
};

export const schoolSidebarContent = {
  badge: 'School Control',
  title: 'Academic desk',
  description:
    'A dedicated dashboard for school teams to stay aligned across students, teachers, attendance, and settings.',
};
