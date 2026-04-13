import { useParams, Link } from 'react-router-dom';
import DashboardShell from '../components/layout/DashboardShell';
import TeacherSidebar from '../components/layout/TeacherSidebar';
import TeacherTopbar from '../components/layout/TeacherTopbar';
import {
  teacherNavItems,
  teacherSidebarContent,
} from './navigation/teacherNavigation';

const mockTeachers = {
  'rajesh-kumar': { name: 'Dr. Rajesh Kumar', role: 'Mathematics Teacher', avatar: '' },
  'priya-sharma': { name: 'Ms. Priya Sharma', role: 'Physics Teacher', avatar: '' },
  'amit-singh': { name: 'Mr. Amit Singh', role: 'Chemistry Teacher', avatar: '' },
  'sneha-gupta': { name: 'Ms. Sneha Gupta', role: 'English Teacher', avatar: '' },
  'vikram-patel': { name: 'Mr. Vikram Patel', role: 'Biology Teacher', avatar: '' },
  'ananya-reddy': { name: 'Ms. Ananya Reddy', role: 'History Teacher', avatar: '' },
  'rahul-verma': { name: 'Mr. Rahul Verma', role: 'Geography Teacher', avatar: '' },
  'meera-nair': { name: 'Ms. Meera Nair', role: 'Computer Science Teacher', avatar: '' },
};

export default function TeacherLayout() {
  const { teacherId } = useParams();
  const teacher = mockTeachers[teacherId] || { name: 'Teacher', role: 'Teacher', avatar: '' };

  const teacherHeader = {
    userName: teacher.name,
    userRole: teacher.role,
    userAvatar: teacher.avatar,
    searchPlaceholder: 'Search students, classes, or subjects...',
    quickActions: [
      { icon: 'notifications' },
      { icon: 'mail' },
    ],
  };

  return (
    <DashboardShell
      topbar={<TeacherTopbar {...teacherHeader} />}
      sidebar={<TeacherSidebar {...teacherSidebarContent} navItems={teacherNavItems} teacherId={teacherId} />}
    />
  );
}