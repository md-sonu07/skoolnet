import { Navigate, Route } from 'react-router-dom';
import SchoolLayout from '../layouts/SchoolLayout';
import Assignments from '../pages/school/Assignments';
import Attendance from '../pages/school/Attendance';
import Classes from '../pages/school/Classes';
import Dashboard from '../pages/school/Dashboard';
import Reports from '../pages/school/Reports';
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
    <Route path="assignments" element={<Assignments />} />
    <Route path="reports" element={<Reports />} />
    <Route path="settings" element={<Settings />} />
  </Route>
);

export default schoolRoutes;
