import AddData from "../../components/Add Data/AddData";
import MainSection from "../../components/Main/Main";

export default function TutorPage() {
  return (
    <MainSection pageTitle="Type de responsable" >
      <AddData href="add" />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
          </tr>
        </thead>
      </table>
    </MainSection>
  )
}