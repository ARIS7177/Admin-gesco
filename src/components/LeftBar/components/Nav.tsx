import CustomLink from './CustomLink';

export default function Nav() {
  return (
    <nav>
        <ul>
          <CustomLink href="/dashboard/home" text="Tableau de bord" />
        </ul>
        <ul>
          <CustomLink href="/dashboard/pre_registration" text="Préinscriptions" />
          <CustomLink href="/dashboard/registration" text="Inscriptions" />
        </ul>
      </nav>
  )
}