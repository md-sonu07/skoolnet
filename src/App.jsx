import { Routes } from 'react-router-dom';
import appRoutes from './routes/AppRoute';
import coachingRoutes from './routes/CoachingRoute';
import managerRoutes from './routes/ManagerRoute';
import schoolRoutes from './routes/SchoolRoute';

function App() {
  return (
    <Routes>
      {appRoutes}
      {managerRoutes}
      {schoolRoutes}
      {coachingRoutes}
    </Routes>
  );
}

export default App;
