import { useParams } from 'react-router-dom';
import DashboardShell from '../components/layout/DashboardShell';
import CoachingTeacherSidebar from '../components/layout/CoachingTeacherSidebar';
import CoachingTeacherTopbar from '../components/layout/CoachingTeacherTopbar';
import {
  coachingTeacherNavItems,
  coachingTeacherSidebarContent,
} from './navigation/coachingTeacherNavigation';

const mockCoachingTeachers = {
  'amit-kumar': { name: 'Dr. Amit Kumar', role: 'Physics Teacher', avatar: '' },
  'priya-sharma': { name: 'Ms. Priya Sharma', role: 'Chemistry Teacher', avatar: '' },
  'rahul-verma': { name: 'Mr. Rahul Verma', role: 'Mathematics Teacher', avatar: '' },
  'sneha-gupta': { name: 'Ms. Sneha Gupta', role: 'Biology Teacher', avatar: '' },
  'kunal-patel': { name: 'Mr. Kunal Patel', role: 'English Teacher', avatar: '' },
  'ananya-reddy': { name: 'Ms. Ananya Reddy', role: 'Computer Teacher', avatar: '' },
  'vikram-joshi': { name: 'Mr. Vikram Joshi', role: 'Physics Teacher', avatar: '' },
  'meera-nair': { name: 'Ms. Meera Nair', role: 'Chemistry Teacher', avatar: '' },
};

export default function CoachingTeacherLayout() {
  const { teacherId } = useParams();
  const teacher = mockCoachingTeachers[teacherId] || { name: 'Teacher', role: 'Teacher', avatar: '' };

  const teacherHeader = {
    userName: teacher.name,
    userRole: teacher.role,
    userAvatar: teacher.avatar,
    searchPlaceholder: 'Search students, courses, assignments...',
    quickActions: [
      { icon: 'notifications' },
      { icon: 'mail' },
    ],
  };

  return (
    <DashboardShell
      topbar={<CoachingTeacherTopbar {...teacherHeader} />}
      sidebar={<CoachingTeacherSidebar {...coachingTeacherSidebarContent} navItems={coachingTeacherNavItems} teacherId={teacherId} />}
    />
  );
}