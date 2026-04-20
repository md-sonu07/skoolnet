import { Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/auth/manager/Login';
import Signup from '../pages/auth/manager/Signup';
import InstitutionLogin from '../pages/auth/Institution/Login';
import InstitutionRegister from '../pages/auth/Institution/Register';
import TeacherLogin from '../pages/auth/Teacher/Login';
import TeacherSignup from '../pages/auth/Teacher/Signup';
import StudentLogin from '../pages/auth/Student/Login';
import StudentSignup from '../pages/auth/Student/Signup';
import PartnerLogin from '../pages/auth/Partner/Login';
import PartnerRegister from '../pages/auth/Partner/Register';

const authRoutes = (
  <Route path="/auth" element={<AuthLayout />}>
    <Route path="manager/login" element={<Login />} />
    <Route path="manager/signup" element={<Signup />} />
    <Route path="institution/login" element={<InstitutionLogin />} />
    <Route path="institution/register" element={<InstitutionRegister />} />
    <Route path="teacher/login" element={<TeacherLogin />} />
    <Route path="teacher/signup" element={<TeacherSignup />} />
    <Route path="student/login" element={<StudentLogin />} />
    <Route path="student/signup" element={<StudentSignup />} />
    <Route path="partner/login" element={<PartnerLogin />} />
    <Route path="partner/register" element={<PartnerRegister />} />
  </Route>
);

export default authRoutes;