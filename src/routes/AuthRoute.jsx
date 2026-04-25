import { lazy } from 'react';
import { Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';

const Login = lazy(() => import('../pages/auth/manager/Login'));
const Signup = lazy(() => import('../pages/auth/manager/Signup'));
const InstitutionLogin = lazy(() => import('../pages/auth/Institution/Login'));
const InstitutionRegister = lazy(() => import('../pages/auth/Institution/Register'));
const TeacherLogin = lazy(() => import('../pages/auth/Teacher/Login'));
const TeacherSignup = lazy(() => import('../pages/auth/Teacher/Signup'));
const StudentLogin = lazy(() => import('../pages/auth/Student/Login'));
const StudentSignup = lazy(() => import('../pages/auth/Student/Signup'));
const PartnerLogin = lazy(() => import('../pages/auth/Partner/Login'));
const PartnerRegister = lazy(() => import('../pages/auth/Partner/Register'));

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