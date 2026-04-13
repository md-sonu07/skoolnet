import { useParams } from 'react-router-dom';
import DashboardShell from '../components/layout/common/DashboardShell';
import StudentSidebar from '../components/layout/school/student/SchoolStudentSidebar';
import StudentTopbar from '../components/layout/school/student/SchoolStudentTopbar';
import {
  studentNavItems,
  studentSidebarContent,
} from './navigation/studentNavigation';

const mockStudents = {
  'aarav-sharma': { name: 'Aarav Sharma', role: 'Class 10-A', avatar: '' },
  'priya-singh': { name: 'Priya Singh', role: 'Class 10-A', avatar: '' },
  'rahul-verma': { name: 'Rahul Verma', role: 'Class 9-B', avatar: '' },
  'sneha-gupta': { name: 'Sneha Gupta', role: 'Class 10-B', avatar: '' },
  'kunal-patel': { name: 'Kunal Patel', role: 'Class 11-A', avatar: '' },
  'ananya-reddy': { name: 'Ananya Reddy', role: 'Class 9-A', avatar: '' },
  'vikram-joshi': { name: 'Vikram Joshi', role: 'Class 12-A', avatar: '' },
  'meera-nair': { name: 'Meera Nair', role: 'Class 10-A', avatar: '' },
  'dev-sharma': { name: 'Dev Sharma', role: 'Class 9-A', avatar: '' },
  'neha-kapoor': { name: 'Neha Kapoor', role: 'Class 10-B', avatar: '' },
};

export default function StudentLayout() {
  const { studentId } = useParams();
  const student = mockStudents[studentId] || { name: 'Student', role: 'Student', avatar: '' };

  const studentHeader = {
    userName: student.name,
    userRole: student.role,
    userAvatar: student.avatar,
    searchPlaceholder: 'Search assignments, notes, results...',
    quickActions: [
      { icon: 'notifications' },
      { icon: 'mail' },
    ],
  };

  return (
    <DashboardShell
      topbar={<StudentTopbar {...studentHeader} />}
      sidebar={<StudentSidebar {...studentSidebarContent} navItems={studentNavItems} studentId={studentId} />}
    />
  );
}