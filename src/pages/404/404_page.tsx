import { Link } from "react-router-dom";

export default function ErrorPage() {
  return <div>
    Page Introuvable <Link to={'/'} > Revenir à l'accueil </Link>
  </div>
}