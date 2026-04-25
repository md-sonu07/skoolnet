import DashboardShell from '../components/layout/common/DashboardShell';
import PartnerSidebar from '../components/layout/partner/PartnerSidebar';
import PartnerTopbar from '../components/layout/partner/PartnerTopbar';
import {
  partnerHeader,
  partnerNavItems,
  partnerSidebarContent,
} from './navigation/partnerNavigation';
import { usePartnerAuth } from '../hooks/api/usePartnerAuth';

export default function PartnerLayout() {
  const { user } = usePartnerAuth();
  
  const platformName = partnerHeader.userRole || 'Partner';
  const partnerName = user?.name || user?.username || 'Partner';
  const partnerRole = 'Organization Partner';

  const partnerMainNavItems = [
    { label: 'Dashboard', icon: 'dashboard', to: 'overview' },
    { label: 'Schools', icon: 'school', to: 'schools' },
    { label: 'Coaching', icon: 'rocket_launch', to: 'coaching' },
    { label: 'Pricing', icon: 'payments', to: 'pricing' },
  ];

  return (
    <DashboardShell
      topbar={<PartnerTopbar {...partnerHeader} userName={partnerName} userRole={partnerRole} />}
      sidebar={<PartnerSidebar {...partnerSidebarContent} userName={partnerName} userRole={partnerRole} navItems={partnerNavItems} />}
      showBottomNav={true}
      context={{ platformName, partnerName }}
      bottomNavItems={partnerNavItems}
      mainNavItems={partnerMainNavItems}
    />
  );
}
