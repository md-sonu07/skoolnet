import { Navigate, Route } from 'react-router-dom';
import TeacherLayout from '../layouts/TeacherLayout';
import SchoolTeacherDashboard from '../pages/school/teacher/Dashboard';
import SchoolTeacherClasses from '../pages/school/teacher/Classes';
import SchoolTeacherStudents from '../pages/school/teacher/Students';
import SchoolTeacherAttendance from '../pages/school/teacher/Attendance';
import SchoolTeacherAssignments from '../pages/school/teacher/Assignments';
import SchoolTeacherNotes from '../pages/school/teacher/Notes';
import SchoolTeacherMarks from '../pages/school/teacher/Marks';
import SchoolTeacherNotices from '../pages/school/teacher/Notices';
import SchoolTeacherMessages from '../pages/school/teacher/Messages';
import SchoolTeacherProfile from '../pages/school/teacher/Profile';

const schoolTeacherRoutes = (
  <Route path="/dashboard/school/teacher/:teacherId" element={<TeacherLayout />}>
    <Route index element={<Navigate to="dashboard" replace />} />
    <Route path="dashboard" element={<SchoolTeacherDashboard />} />
    <Route path="my-classes" element={<SchoolTeacherClasses />} />
    <Route path="my-students" element={<SchoolTeacherStudents />} />
    <Route path="attendance" element={<SchoolTeacherAttendance />} />
    <Route path="assignments" element={<SchoolTeacherAssignments />} />
    <Route path="notes" element={<SchoolTeacherNotes />} />
    <Route path="marks" element={<SchoolTeacherMarks />} />
    <Route path="notices" element={<SchoolTeacherNotices />} />
    <Route path="messages" element={<SchoolTeacherMessages />} />
    <Route path="profile" element={<SchoolTeacherProfile />} />
  </Route>
);

export default schoolTeacherRoutes;