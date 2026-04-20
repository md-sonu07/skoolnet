import { Routes } from 'react-router-dom';
import appRoutes from './routes/AppRoute';
import authRoutes from './routes/AuthRoute';
import coachingRoutes from './routes/CoachingRoute';
import coachingTeacherRoutes from './routes/CoachingTeacherRoute';
import coachingStudentRoutes from './routes/CoachingStudentRoute';
import managerRoutes from './routes/ManagerRoute';
import partnerRoutes from './routes/PartnerRoute';
import schoolRoutes from './routes/SchoolRoute';
import schoolTeacherRoutes from './routes/SchoolTeacherRoute';
import schoolStudentRoutes from './routes/SchoolStudentRoute';

function App() {
  return (
    <Routes>
      {appRoutes}
      {authRoutes}
      {managerRoutes}
      {partnerRoutes}
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