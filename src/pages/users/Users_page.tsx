import { useEffect, useState } from "react";
import MainSection from "../../components/Main/Main";
import { fecthService } from "../../services/fetchService";
import AddData from "../../components/Add Data/AddData";

interface User {
  id: number,
  email: string,
  tel: number,
  is_active: boolean,
  is_super_admin: boolean,
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[] | null>(null) ;

  async function getUsers() {
    const datas = await fecthService.fetch('/users/list', 'get') ;

    if(datas == false ) return ;

    setUsers(datas.users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  console.log(users);
  
  

  return (
    <>
      <MainSection pageTitle="Utilisateurs">
        <AddData href="add" />
        <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Telephone</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </MainSection>
    </>
  )
}