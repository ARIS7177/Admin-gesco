import AddData from "../../components/Add Data/AddData";
import MainSection from "../../components/Main/Main";

export default function RegistrationFeePage() {
  return (
    <MainSection pageTitle="Frais de préinscription" >
      <AddData href="add" />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Annee Academique</th>
            <th>Classe</th>
            <th>Montant</th>
          </tr>
        </thead>
      </table>
    </MainSection>
  )
}