import { Link } from 'react-router-dom';

export default function AddData({href}: {href: string}) {
  return (
    <div className="add">
        <Link to={href}>
          <span>
              Ajouter
          </span>
        </Link>
    </div>
  )
}