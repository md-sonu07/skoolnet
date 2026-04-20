import DashboardShell from '../components/layout/common/DashboardShell';
import PartnerSidebar from '../components/layout/partner/PartnerSidebar';
import PartnerTopbar from '../components/layout/partner/PartnerTopbar';
import {
  partnerHeader,
  partnerNavItems,
  partnerSidebarContent,
} from './navigation/partnerNavigation';

export default function PartnerLayout() {
  const platformName = partnerHeader.userRole || 'Platform';
  const partnerName = partnerHeader.userName || 'Partner';

  const partnerMainNavItems = [
    { label: 'Dashboard', icon: 'dashboard', to: 'overview' },
    { label: 'Schools', icon: 'school', to: 'schools' },
    { label: 'Coaching', icon: 'rocket_launch', to: 'coaching' },
    { label: 'Pricing', icon: 'payments', to: 'pricing' },
  ];

  return (
    <DashboardShell
      topbar={<PartnerTopbar {...partnerHeader} />}
      sidebar={<PartnerSidebar {...partnerSidebarContent} navItems={partnerNavItems} />}
      showBottomNav={true}
      context={{ platformName, partnerName }}
      bottomNavItems={partnerNavItems}
      mainNavItems={partnerMainNavItems}
    />
  );
}
