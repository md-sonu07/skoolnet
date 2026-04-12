import DashboardShell from '../components/layout/DashboardShell';
import CoachingSidebar from '../components/layout/CoachingSidebar';
import CoachingTopbar from '../components/layout/CoachingTopbar';
import {
  coachingHeader,
  coachingNavItems,
  coachingSidebarContent,
} from './navigation/coachingNavigation';

export default function CoachingLayout() {
  return (
    <DashboardShell
      topbar={<CoachingTopbar {...coachingHeader} />}
      sidebar={<CoachingSidebar {...coachingSidebarContent} navItems={coachingNavItems} />}
    />
  );
}