import { Navigate } from "react-router-dom";
import { AuthGuardProps } from "./AuthGuardProps";
import { UserContext } from "./context/UserContext";
import { Admin, Token, User } from "../../services/Admin";

export default function AuthGuard ({ children }: AuthGuardProps) {
  const token: Token | false = Admin.getToken() ;
  const user: User | false = Admin.getUser() ;

  if(!token || !user) {
    return <Navigate to={'/'} />
  }

  return (
    <UserContext.Provider value={user}>
      { children } 
    </UserContext.Provider>
  ) 
}