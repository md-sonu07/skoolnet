import DashboardShell from '../components/layout/common/DashboardShell';
import ManagerSidebar from '../components/layout/manager/ManagerSidebar';
import ManagerTopbar from '../components/layout/manager/ManagerTopbar';
import {
  managerHeader,
  managerNavItems,
  managerSidebarContent,
} from './navigation/managerNavigation';

export default function ManagerLayout() {
  const platformName = managerHeader.userRole || 'Platform';
  const adminName = managerHeader.userName || 'Admin';

  const adminMainNavItems = [
    { label: 'Dashboard', icon: 'dashboard', to: 'overview' },
    { label: 'Schools', icon: 'school', to: 'schools' },
    { label: 'Coaching', icon: 'rocket_launch', to: 'coaching' },
    { label: 'Partners', icon: 'group', to: 'partners' },
  ];

  return (
    <DashboardShell
      topbar={<ManagerTopbar {...managerHeader} />}
      sidebar={<ManagerSidebar {...managerSidebarContent} navItems={managerNavItems} upgradePlan={managerSidebarContent.upgradePlan} />}
      showBottomNav={true}
      context={{ platformName, adminName }}
      bottomNavItems={managerNavItems}
      mainNavItems={adminMainNavItems}
    />
  );
}