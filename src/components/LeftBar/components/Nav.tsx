import { useContext } from 'react';
import CustomLink from './CustomLink';
import { UserContext } from '../../Auth/context/UserContext';

export default function Nav() {
  const user: any = useContext(UserContext)
  const { isSuperAdmin } = user ;

  return (
    <nav>
      <ul>
        <CustomLink href="/dashboard/home" text="Tableau de bord" />
      </ul>
      <ul>
        <CustomLink href="/dashboard/pre_registration" text="Préinscriptions" />
        <CustomLink href="/dashboard/registration" text="Inscriptions" />
        {
          isSuperAdmin == 0 ? null :
            <CustomLink href="/dashboard/users" text="Utilisateurs" />
        }
      </ul>
    </nav>
  )
}