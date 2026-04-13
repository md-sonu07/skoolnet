import DashboardShell from '../components/layout/common/DashboardShell';
import CoachingSidebar from '../components/layout/coaching/CoachingSidebar';
import CoachingTopbar from '../components/layout/coaching/CoachingTopbar';
import {
  coachingHeader,
  coachingNavItems,
  coachingSidebarContent,
} from './navigation/coachingNavigation';

export default function CoachingLayout() {
  const adminMainNavItems = [
    { label: 'Overview', icon: 'dashboard', to: 'overview' },
    { label: 'Students', icon: 'group', to: 'students' },
    { label: 'Teachers', icon: 'school', to: 'teachers' },
    { label: 'Courses', icon: 'menu_book', to: 'courses' },
  ];

  return (
    <DashboardShell
      topbar={<CoachingTopbar {...coachingHeader} />}
      sidebar={<CoachingSidebar {...coachingSidebarContent} navItems={coachingNavItems} />}
      showBottomNav={true}
      bottomNavItems={coachingNavItems}
      mainNavItems={adminMainNavItems}
      context={{ coachingName: coachingHeader.userRole }}
    />
  );
}