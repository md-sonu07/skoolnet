import DashboardShell from '../components/layout/DashboardShell';
import DashboardSidebar from '../components/layout/DashboardSidebar';
import DashboardTopbar from '../components/layout/DashboardTopbar';
import {
  coachingHeader,
  coachingNavItems,
  coachingSidebarContent,
} from './navigation/coachingNavigation';

export default function CoachingLayout() {
  return (
    <DashboardShell
      topbar={<DashboardTopbar {...coachingHeader} />}
      sidebar={<DashboardSidebar {...coachingSidebarContent} navItems={coachingNavItems} />}
    />
  );
}
