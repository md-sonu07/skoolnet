import { Navigate, Route } from 'react-router-dom';
import CoachingLayout from '../layouts/CoachingLayout';
import Applications from '../pages/coaching/Applications';
import Attendance from '../pages/coaching/Attendance';
import Content from '../pages/coaching/Content';
import Courses from '../pages/coaching/Courses';
import Dashboard from '../pages/coaching/Dashboard';
import Notices from '../pages/coaching/Notices';
import Payments from '../pages/coaching/Payments';
import Profile from '../pages/coaching/Profile';
import Results from '../pages/coaching/Results';
import Schedule from '../pages/coaching/Schedule';
import Settings from '../pages/coaching/Settings';
import Students from '../pages/coaching/Students';
import Subscriptions from '../pages/coaching/Subscriptions';
import Teachers from '../pages/coaching/Teachers';
import Batches from '../pages/coaching/Batches';
import Reports from '../pages/coaching/Reports';

const coachingRoutes = (
  <Route path="/dashboard/coaching" element={<CoachingLayout />}>
    <Route index element={<Navigate to="overview" replace />} />
    <Route path="overview" element={<Dashboard />} />
    <Route path="profile" element={<Profile />} />
    <Route path="notices" element={<Notices />} />
    <Route path="students" element={<Students />} />
    <Route path="teachers" element={<Teachers />} />
    <Route path="courses" element={<Courses />} />
    <Route path="batches" element={<Batches />} />
    <Route path="attendance" element={<Attendance />} />
    <Route path="schedule" element={<Schedule />} />
    <Route path="content" element={<Content />} />
    <Route path="payments" element={<Payments />} />
    <Route path="subscriptions" element={<Subscriptions />} />
    <Route path="applications" element={<Applications />} />
    <Route path="results" element={<Results />} />
    <Route path="reports" element={<Reports />} />
    <Route path="settings" element={<Settings />} />
  </Route>
);

export default coachingRoutes;