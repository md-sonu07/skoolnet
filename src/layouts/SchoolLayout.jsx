import DashboardShell from '../components/layout/common/DashboardShell';
import SchoolSidebar from '../components/layout/school/SchoolSidebar';
import SchoolTopbar from '../components/layout/school/SchoolTopbar';
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