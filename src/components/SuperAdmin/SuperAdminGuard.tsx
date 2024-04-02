import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function SuperAdminGuard ({ children }: { children: ReactNode }) {
  let user: any = localStorage.getItem('user') ;
  user = JSON.parse(user) ;

  if(!user.isSuperAdmin) {
    return <Navigate to={'/dashboard'} />
  }

  return children
}