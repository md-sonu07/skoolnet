import { Navigate, Route } from 'react-router-dom';
import PartnerLayout from '../layouts/PartnerLayout';
import PartnerDashboard from '../pages/partner/Dashboard';
import PartnerSchools from '../pages/partner/Schools';
import PartnerCoaching from '../pages/partner/Coaching';
import PartnerPricing from '../pages/partner/Pricing';
import PartnerActivity from '../pages/partner/Activity';
import PartnerNotices from '../pages/partner/Notices';
import PartnerMessages from '../pages/partner/Messages';
import PartnerStudents from '../pages/partner/Students';
import PartnerSettings from '../pages/partner/Settings';
import PartnerProfile from '../pages/partner/Profile';

const partnerRoutes = (
  <Route path="/dashboard/partner" element={<PartnerLayout />}>
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<PartnerDashboard />} />
    <Route path="schools" element={<PartnerSchools />} />
    <Route path="coaching" element={<PartnerCoaching />} />
    <Route path="pricing" element={<PartnerPricing />} />
    <Route path="activity" element={<PartnerActivity />} />
    <Route path="notices" element={<PartnerNotices />} />
    <Route path="messages" element={<PartnerMessages />} />
    <Route path="students" element={<PartnerStudents />} />
    <Route path="settings" element={<PartnerSettings />} />
    <Route path="profile" element={<PartnerProfile />} />
  </Route>
);

export default partnerRoutes;
