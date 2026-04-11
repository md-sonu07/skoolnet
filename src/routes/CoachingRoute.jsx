import { Navigate, Route } from 'react-router-dom';
import CoachingLayout from '../layouts/CoachingLayout';
import Attendance from '../pages/coaching/attendance/Attendance';
import Batches from '../pages/coaching/batches/Batches';
import Dashboard from '../pages/coaching/dashboard/Dashboard';
import Payments from '../pages/coaching/payments/Payments';
import Schedule from '../pages/coaching/schedule/Schedule';
import Students from '../pages/coaching/students/Students';

const coachingRoutes = (
  <Route path="/dashboard/coaching" element={<CoachingLayout />}>
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<Dashboard />} />
    <Route path="batches" element={<Batches />} />
    <Route path="students" element={<Students />} />
    <Route path="attendance" element={<Attendance />} />
    <Route path="payments" element={<Payments />} />
    <Route path="schedule" element={<Schedule />} />
  </Route>
);

export default coachingRoutes;
