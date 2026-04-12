export const managerNavItems = [
  { label: 'Dashboard', icon: 'dashboard', to: 'overview' },
  { label: 'Schools', icon: 'school', to: 'schools' },
  { label: 'Coaching', icon: 'rocket_launch', to: 'coaching' },
  { label: 'Partners', icon: 'group', to: 'partners' },
  { label: 'Pricing', icon: 'payments', to: 'pricing' },
  { label: 'Global Pricing', icon: 'edit', to: 'global-pricing' },
  { label: 'Activity', icon: 'activity', to: 'activity' },
  { label: 'Notifications', icon: 'notifications', to: 'notifications' },
  { label: 'Messages', icon: 'mail', to: 'contact' },
  { label: 'Users', icon: 'group', to: 'users' },
  { label: 'Settings', icon: 'settings', to: 'settings' },
];

export const managerHeader = {
  userName: 'Alexander Pierce',
  userRole: 'Platform Manager',
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRKIGUGFXKTmbmp0epeDC-YJvG3VlT6NFOzbEmey9ua5GE_7locUazze5tBIOXEYJcvrgCva-TZd5RvYxvaZeM0m5RvNsTiN69P-JveNwpySSiz5SIGxP5hbVDW2r3rrkl0g5zG8fy1oufDYI5OzLwbTp4QsowZTn7YfqAVpmUTAhaIWWpExxyxXdjlpf9obF301W3SToNPS7eX7gkccJ9uDeh9unR-ozQwvNr8uOxYJeBnEuMzhhAGHxi96dfdpgWM-9t-2WzxAk',
  searchPlaceholder: 'Search records, schools, or partners...',
  quickActions: [
    { icon: 'notifications' },
    { icon: 'contrast' },
    { icon: 'settings' },
  ],
};

export const managerSidebarContent = {
  badge: 'Manager Portal',
  title: 'Skoolnet',
  description: '',
  upgradePlan: {
    title: 'Enterprise Plan',
    buttonText: 'Upgrade Plan'
  }
};
