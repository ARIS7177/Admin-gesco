import { Navigate } from "react-router-dom";
import { AuthGuardProps } from "./AuthGuardProps";
import { UserContext } from "./context/UserContext";

export default function AuthGuard ({ children }: AuthGuardProps) {
  const token = localStorage.getItem('token') ;
  const user: any = JSON.parse(localStorage.getItem('user')!) ;

  if(!token) {
    return <Navigate to={'/'} />
  }

  return (
    <UserContext.Provider value={user}>
      { children } 
    </UserContext.Provider>
  ) 
}