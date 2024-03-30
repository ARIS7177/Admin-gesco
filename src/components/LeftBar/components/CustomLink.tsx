import { NavLink } from 'react-router-dom';

interface CustomLinkProps {
  href: string,
  text: string,
}

export default function CustomLink({href, text}: CustomLinkProps) {
  return (
    <li>
      <NavLink to={href}>
        <span>
          {text}
        </span>
      </NavLink>
    </li>
  )
}