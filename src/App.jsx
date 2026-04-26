import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
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
        
        {/* 404 Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;