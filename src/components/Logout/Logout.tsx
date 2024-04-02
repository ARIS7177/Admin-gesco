import { Navigate } from "react-router-dom"

export default function Logout() {
  
  localStorage.removeItem('token')
  localStorage.removeItem('user')

  return (
    <Navigate to={'/'} />
  )
}