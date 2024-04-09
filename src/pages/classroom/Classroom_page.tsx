import MainSection from "../../components/Main/Main";
import AddData from "../../components/Add Data/AddData";
import { fecthService } from "../../services/fetchService";
import { useEffect, useState } from "react";

interface Classroom {
  id: number,
  classromName: string
}

export default function ClassroomPage() {
  const [classrooms, setClassrooms] = useState<Classroom[] | null>(null)

  async function getDatas() {
    const response = await fecthService.fetch('/classroom/list', 'get') ;
    
    if(response.status == 200) {
      setClassrooms(response.classrooms)
    }
    
  }

  useEffect(() => {
    getDatas()
  }, [])

  return (
    <MainSection pageTitle="Salles de Classe" >
      <AddData href="add" />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {
            classrooms && classrooms.map((item) => {
              return (
                <tr key={ item.id }>
                  <td> { item.id } </td>
                  <td> { item.classromName } </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </MainSection>
  )
}