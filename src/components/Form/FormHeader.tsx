import { Link } from "react-router-dom";

export default function FormHeader ({title} : {title: string}) {
  return (
    <header>
      <Link to={'/'}>
        <img src="/logo/blue.png" alt="Logo Gesco" />
      </Link>

      <h1>
        <span>{ title }</span>
      </h1>
    </header>
  )
}