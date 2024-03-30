import { Link } from "react-router-dom";

export default function LogoContainer () {
 return (
  <Link
    className="logo-container"
    to={'/dashboard/home'} 
  >
    <img src="/logo/white.png" alt="Logo Gesco" />
  </Link>
 ) 
}