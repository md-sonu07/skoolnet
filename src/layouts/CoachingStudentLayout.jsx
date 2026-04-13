import { useParams } from 'react-router-dom';
import DashboardShell from '../components/layout/DashboardShell';
import CoachingStudentSidebar from '../components/layout/CoachingStudentSidebar';
import CoachingStudentTopbar from '../components/layout/CoachingStudentTopbar';
import {
  coachingStudentNavItems,
  coachingStudentSidebarContent,
} from './navigation/coachingStudentNavigation';

const mockCoachingStudents = {
  'aarav-sharma': { name: 'Aarav Sharma', role: 'NEET Foundation', avatar: '' },
  'priya-singh': { name: 'Priya Singh', role: 'JEE Advanced', avatar: '' },
  'rahul-verma': { name: 'Rahul Verma', role: 'Coding Bootcamp', avatar: '' },
  'sneha-gupta': { name: 'Sneha Gupta', role: 'NEET Foundation', avatar: '' },
  'kunal-patel': { name: 'Kunal Patel', role: 'JEE Mains', avatar: '' },
  'ananya-reddy': { name: 'Ananya Reddy', role: 'NEET Foundation', avatar: '' },
  'vikram-joshi': { name: 'Vikram Joshi', role: 'JEE Advanced', avatar: '' },
  'meera-nair': { name: 'Meera Nair', role: 'Coding Bootcamp', avatar: '' },
};

export default function CoachingStudentLayout() {
  const { studentId } = useParams();
  const student = mockCoachingStudents[studentId] || { name: 'Student', role: 'Student', avatar: '' };

  const studentHeader = {
    userName: student.name,
    userRole: student.role,
    userAvatar: student.avatar,
    searchPlaceholder: 'Search courses, assignments, results...',
    quickActions: [
      { icon: 'notifications' },
      { icon: 'mail' },
    ],
  };

  return (
    <DashboardShell
      topbar={<CoachingStudentTopbar {...studentHeader} />}
      sidebar={<CoachingStudentSidebar {...coachingStudentSidebarContent} navItems={coachingStudentNavItems} studentId={studentId} />}
    />
  );
}