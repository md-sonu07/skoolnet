import DashboardShell from '../components/layout/DashboardShell';
import SchoolSidebar from '../components/layout/SchoolSidebar';
import SchoolTopbar from '../components/layout/SchoolTopbar';
import {
  schoolHeader,
  schoolNavItems,
  schoolSidebarContent,
} from './navigation/schoolNavigation';

export default function SchoolLayout() {
  return (
    <DashboardShell
      topbar={<SchoolTopbar {...schoolHeader} />}
      sidebar={<SchoolSidebar {...schoolSidebarContent} navItems={schoolNavItems} />}
    />
  );
}