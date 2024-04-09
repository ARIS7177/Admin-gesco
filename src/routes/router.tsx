import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/Login_page";
import DashboardPage from "../pages/dashboard/Dashboard_page";
import ErrorPage from "../pages/404/404_page";
import AuthGuard from "../components/Auth/AuthGuard";
import RegistrationPage from "../pages/registration/RegistrationPage";
import PreRegistrationPage from "../pages/pre_registration/PreRegistrationPage";
import SignInPage from "../pages/signin/SignIn_page";
import Logout from "../components/Logout/Logout";
import IsLogin from "../components/Auth/IsLogin";
import UsersPage from "../pages/users/Users_page";
import SuperAdminGuard from "../components/SuperAdmin/SuperAdminGuard";
import ClassroomPage from "../pages/classroom/Classroom_page";
import RegistrationFeePage from "../pages/registration_fee/Registration_fee_page";
import TutorPage from "../pages/tutor/Tutor_page";
import AddUserPage from "../pages/users/AddUser_page";
import AddClassroomPage from "../pages/classroom/AddClassroom_page";
import AddRegistrationFeePage from "../pages/registration_fee/AddRegistration_fee_page";
import AddTutorPage from "../pages/tutor/AddTutor_page";
import AcademicYearPage from "../pages/academic_year/AcademicYear_page";
import AddAcademicYearPage from "../pages/academic_year/AddAcademicYear_page";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/login'} />
  },
  {
    path: '/dashboard',
    element: <Navigate to={'/dashboard/home'}/>
  },
  {
    path: '/signin',
    element: <SignInPage />
  },
  {
    path: '/login',
    element: <IsLogin> <LoginPage /> </IsLogin> 
  },
  {
    path: '/logout',
    element: <Logout />
  },
  {
    path: '/dashboard/home',
    element:  <AuthGuard><DashboardPage /></AuthGuard>
  },
  {
    path: '/dashboard/pre_registration',
    element:  <AuthGuard><PreRegistrationPage /></AuthGuard>
  },
  {
    path: '/dashboard/registration',
    element:  <AuthGuard><RegistrationPage /></AuthGuard>
  },
  {
    path: '/dashboard/users',
    element:  <AuthGuard> <SuperAdminGuard> <UsersPage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/users/add',
    element:  <AuthGuard> <SuperAdminGuard> <AddUserPage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/classroom',
    element:  <AuthGuard> <SuperAdminGuard> <ClassroomPage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/classroom/add',
    element:  <AuthGuard> <SuperAdminGuard> <AddClassroomPage/> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/academic_year',
    element:  <AuthGuard> <SuperAdminGuard> <AcademicYearPage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/academic_year/add',
    element:  <AuthGuard> <SuperAdminGuard> <AddAcademicYearPage/> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/registration_fee',
    element:  <AuthGuard> <SuperAdminGuard> <RegistrationFeePage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/registration_fee/add',
    element:  <AuthGuard> <SuperAdminGuard> <AddRegistrationFeePage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/tutor',
    element:  <AuthGuard> <SuperAdminGuard> <TutorPage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '/dashboard/tutor/add',
    element:  <AuthGuard> <SuperAdminGuard> <AddTutorPage /> </SuperAdminGuard> </AuthGuard>
  },
  {
    path: '*',
    element: <ErrorPage />
  },
])