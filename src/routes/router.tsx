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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/login'} />
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
    path: '/dashboard',
    element: <Navigate to={'/dashboard/home'}/>
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
    path: '*',
    element: <ErrorPage />
  },
])