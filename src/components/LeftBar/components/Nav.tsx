import { useContext } from 'react';
import CustomLink from './CustomLink';
import { UserContext } from '../../Auth/context/UserContext';
import { User } from '../../../services/Admin';

export default function Nav() {
  const user: User = useContext(UserContext)!
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
          isSuperAdmin  && (
            <>
              <CustomLink href="/dashboard/users" text="Utilisateurs" />
              <CustomLink href="/dashboard/classroom" text="Salles de classe" />
              <CustomLink href="/dashboard/academic_year" text="Années" />
              <CustomLink href="/dashboard/registration_fee" text="Frais" />
              <CustomLink href="/dashboard/tutor" text="Tuteur" />
            </>

          )
        }
      </ul>
    </nav>
  )
}