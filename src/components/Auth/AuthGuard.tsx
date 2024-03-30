import { Navigate } from "react-router-dom";
import { AuthGuardProps } from "./AuthGuardProps";

export default function AuthGuard ({ children }: AuthGuardProps) {
  const data = 1 ;

  if(!data) {
    return <Navigate to={'/'} />
  }

  return children ;
}