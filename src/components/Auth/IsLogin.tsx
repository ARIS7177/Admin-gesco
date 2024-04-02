import { Navigate } from "react-router-dom";
import { AuthGuardProps } from "./AuthGuardProps";

export default function IsLogin ({ children }: AuthGuardProps) {
  const token = localStorage.getItem('token') ;
  
  if(token) {
    return <Navigate to={'/dashboard'} />
  }

  return children ; 
}