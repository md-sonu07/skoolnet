import DashboardShell from '../components/layout/common/DashboardShell';
import ManagerSidebar from '../components/layout/manager/ManagerSidebar';
import ManagerTopbar from '../components/layout/manager/ManagerTopbar';
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