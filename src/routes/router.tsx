import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login/Login_page";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
])