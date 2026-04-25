import { useParams } from 'react-router-dom';
import DashboardShell from '../components/layout/common/DashboardShell';
import CoachingStudentSidebar from '../components/layout/coaching/student/CoachingStudentSidebar';
import CoachingStudentTopbar from '../components/layout/coaching/student/CoachingStudentTopbar';
import {
  coachingStudentNavItems,
  coachingStudentSidebarContent,
} from './navigation/coachingStudentNavigation';
import { useAuth } from '../hooks/api/useAuth';

export default function CoachingStudentLayout() {
  const { studentId } = useParams();
  const { user, logout } = useAuth();

  const student = {
    name: user?.first_name || user?.last_name 
      ? `${user.first_name || ''} ${user.last_name || ''}`.trim() 
      : 'Student',
    role: user?.student_profile?.course_name || 'Student',
    avatar: user?.avatar || '',
  };

  const studentHeader = {
    userName: student.name,
    userRole: student.role,
    userAvatar: student.avatar,
    searchPlaceholder: 'Search courses, assignments, results...',
    quickActions: [
      { icon: 'notifications', to: 'notices' },
      { icon: 'mail', to: 'messages' },
    ],
  };

  const studentMainNavItems = [
    { label: 'Home', icon: 'dashboard', to: 'dashboard' },
    { label: 'Courses', icon: 'school', to: 'courses' },
    { label: 'Assignments', icon: 'folder_open', to: 'assignments' },
    { label: 'Results', icon: 'grade', to: 'results' },
  ];

  return (
    <DashboardShell
      topbar={<CoachingStudentTopbar {...studentHeader} />}
      sidebar={<CoachingStudentSidebar {...coachingStudentSidebarContent} navItems={coachingStudentNavItems} userName={student.name} studentId={studentId} userRole={student.role} onLogout={logout} />}
      showBottomNav={true}
      context={{ user: student }}
      bottomNavItems={coachingStudentNavItems}
      mainNavItems={studentMainNavItems}
    />
  );
}