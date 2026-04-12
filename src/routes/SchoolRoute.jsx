import { Navigate, Route } from 'react-router-dom';
import SchoolLayout from '../layouts/SchoolLayout';
import Applications from '../pages/school/Applications';
import Assignments from '../pages/school/Assignments';
import Attendance from '../pages/school/Attendance';
import Classes from '../pages/school/Classes';
import Dashboard from '../pages/school/Dashboard';
import Fees from '../pages/school/Fees';
import Notices from '../pages/school/Notices';
import Notifications from '../pages/school/Notifications';
import Reports from '../pages/school/Reports';
import Results from '../pages/school/Results';
import Settings from '../pages/school/Settings';
import Students from '../pages/school/Students';
import Teachers from '../pages/school/Teachers';

const schoolRoutes = (
  <Route path="/dashboard/school" element={<SchoolLayout />}>
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<Dashboard />} />
    <Route path="students" element={<Students />} />
    <Route path="teachers" element={<Teachers />} />
    <Route path="classes" element={<Classes />} />
    <Route path="attendance" element={<Attendance />} />
    <Route path="notices" element={<Notices />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="assignments" element={<Assignments />} />
    <Route path="results" element={<Results />} />
    <Route path="fees" element={<Fees />} />
    <Route path="applications" element={<Applications />} />
    <Route path="reports" element={<Reports />} />
    <Route path="settings" element={<Settings />} />
  </Route>
);

export default schoolRoutes;