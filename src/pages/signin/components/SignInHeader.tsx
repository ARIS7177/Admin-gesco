import { Link } from "react-router-dom";

export default function SignInHeader () {
  return (
    <header>
      <Link to={'/'}>
        <img src="/logo/blue.png" alt="Logo Gesco" />
      </Link>

      <h1>
        <span>Créer un compte administrateur</span>
      </h1>
    </header>
  )
}