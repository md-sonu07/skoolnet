import DashboardShell from '../components/layout/DashboardShell';
import DashboardSidebar from '../components/layout/DashboardSidebar';
import DashboardTopbar from '../components/layout/DashboardTopbar';
import {
  schoolHeader,
  schoolNavItems,
  schoolSidebarContent,
} from './navigation/schoolNavigation';

export default function SchoolLayout() {
  return (
    <DashboardShell
      topbar={<DashboardTopbar {...schoolHeader} />}
      sidebar={<DashboardSidebar {...schoolSidebarContent} navItems={schoolNavItems} />}
    />
  );
}
