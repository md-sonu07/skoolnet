import DashboardShell from '../components/layout/DashboardShell';
import DashboardSidebar from '../components/layout/DashboardSidebar';
import DashboardTopbar from '../components/layout/DashboardTopbar';
import {
  managerHeader,
  managerNavItems,
  managerSidebarContent,
} from './navigation/managerNavigation';

export default function ManagerLayout() {
  return (
    <DashboardShell
      topbar={<DashboardTopbar {...managerHeader} />}
      sidebar={<DashboardSidebar {...managerSidebarContent} navItems={managerNavItems} upgradePlan={managerSidebarContent.upgradePlan} />}
    />
  );
}
