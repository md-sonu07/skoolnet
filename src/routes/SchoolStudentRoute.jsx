import { Navigate, Route } from 'react-router-dom';
import StudentLayout from '../layouts/StudentLayout';
import SchoolStudentDashboard from '../pages/school/student/Dashboard';
import SchoolStudentProfile from '../pages/school/student/Profile';
import SchoolStudentAttendance from '../pages/school/student/Attendance';
import SchoolStudentAssignments from '../pages/school/student/Assignments';
import SchoolStudentNotes from '../pages/school/student/Notes';
import SchoolStudentResults from '../pages/school/student/Results';
import SchoolStudentTimetable from '../pages/school/student/Timetable';
import SchoolStudentFees from '../pages/school/student/Payments';
import SchoolStudentNotices from '../pages/school/student/Notices';
import SchoolStudentMessages from '../pages/school/student/Messages';

const schoolStudentRoutes = (
  <Route path="/dashboard/school/student/:studentId" element={<StudentLayout />}>
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<SchoolStudentDashboard />} />
    <Route path="profile" element={<SchoolStudentProfile />} />
    <Route path="attendance" element={<SchoolStudentAttendance />} />
    <Route path="assignments" element={<SchoolStudentAssignments />} />
    <Route path="notes" element={<SchoolStudentNotes />} />
    <Route path="results" element={<SchoolStudentResults />} />
    <Route path="timetable" element={<SchoolStudentTimetable />} />
    <Route path="fees" element={<SchoolStudentFees />} />
    <Route path="notices" element={<SchoolStudentNotices />} />
    <Route path="messages" element={<SchoolStudentMessages />} />
  </Route>
);

export default schoolStudentRoutes;