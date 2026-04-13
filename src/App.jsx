import { Routes } from 'react-router-dom';
import appRoutes from './routes/AppRoute';
import authRoutes from './routes/AuthRoute';
import coachingRoutes from './routes/CoachingRoute';
import coachingTeacherRoutes from './routes/CoachingTeacherRoute';
import coachingStudentRoutes from './routes/CoachingStudentRoute';
import managerRoutes from './routes/ManagerRoute';
import schoolRoutes from './routes/SchoolRoute';
import schoolTeacherRoutes from './routes/SchoolTeacherRoute';
import schoolStudentRoutes from './routes/SchoolStudentRoute';

function App() {
  return (
    <Routes>
      {appRoutes}
      {authRoutes}
      {managerRoutes}
      {schoolRoutes}
      {schoolTeacherRoutes}
      {schoolStudentRoutes}
      {coachingRoutes}
      {coachingTeacherRoutes}
      {coachingStudentRoutes}
    </Routes>
  );
}

export default App;