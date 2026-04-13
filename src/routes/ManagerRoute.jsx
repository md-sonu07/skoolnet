import { Navigate, Route } from 'react-router-dom';
import ManagerLayout from '../layouts/ManagerLayout';
import Activity from '../pages/manager/Activity';
import Coaching from '../pages/manager/Coaching';
import Contact from '../pages/manager/Contact';
import Dashboard from '../pages/manager/Dashboard';
import GlobalPricing from '../pages/manager/GlobalPricing';
import Notices from '../pages/manager/Notices';
import Partners from '../pages/manager/Partners';
import Pricing from '../pages/manager/Pricing';
import Profile from '../pages/manager/Profile';
import Settings from '../pages/manager/Settings';
import Schools from '../pages/manager/Schools';
import Users from '../pages/manager/Users';

const managerRoutes = (
  <Route path="/dashboard/manager" element={<ManagerLayout />}>
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<Dashboard />} />
    <Route path="schools" element={<Schools />} />
    <Route path="coaching" element={<Coaching />} />
    <Route path="partners" element={<Partners />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="global-pricing" element={<GlobalPricing />} />
    <Route path="activity" element={<Activity />} />
    <Route path="notices" element={<Notices />} />
    <Route path="messages" element={<Contact />} />
    <Route path="users" element={<Users />} />
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
);

export default managerRoutes;
