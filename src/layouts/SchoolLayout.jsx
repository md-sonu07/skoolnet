import DashboardShell from '../components/layout/common/DashboardShell';
import SchoolSidebar from '../components/layout/school/SchoolSidebar';
import SchoolTopbar from '../components/layout/school/SchoolTopbar';
import {
  schoolHeader,
  schoolNavItems,
  schoolSidebarContent,
} from './navigation/schoolNavigation';

export default function SchoolLayout() {
  const adminMainNavItems = [
    { label: 'Overview', icon: 'dashboard', to: 'overview' },
    { label: 'Students', icon: 'group', to: 'students' },
    { label: 'Teachers', icon: 'how_to_reg', to: 'teachers' },
    { label: 'Classes', icon: 'school', to: 'classes' },
  ];

  return (
    <DashboardShell
      topbar={<SchoolTopbar {...schoolHeader} />}
      sidebar={<SchoolSidebar {...schoolSidebarContent} navItems={schoolNavItems} />}
      showBottomNav={true}
      bottomNavItems={schoolNavItems}
      mainNavItems={adminMainNavItems}
    />
  );
}