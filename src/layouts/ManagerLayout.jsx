import DashboardShell from '../components/layout/DashboardShell';
import ManagerSidebar from '../components/layout/ManagerSidebar';
import ManagerTopbar from '../components/layout/ManagerTopbar';
import {
  managerHeader,
  managerNavItems,
  managerSidebarContent,
} from './navigation/managerNavigation';

export default function ManagerLayout() {
  return (
    <DashboardShell
      topbar={<ManagerTopbar {...managerHeader} />}
      sidebar={<ManagerSidebar {...managerSidebarContent} navItems={managerNavItems} upgradePlan={managerSidebarContent.upgradePlan} />}
    />
  );
}