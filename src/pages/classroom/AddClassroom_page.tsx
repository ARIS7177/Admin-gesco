import { FormEvent, useState } from "react";
import InputField from "../../components/Form/FormComponents/InputField";
import MainSection from "../../components/Main/Main";
import { fecthService } from "../../services/fetchService";
import { useNavigate } from "react-router-dom";

export default function AddClassroomPage() {
  const [formDatas, setFormDatas] = useState({classroom_name: ''})
  const [isFormElementsErrors, setIsFormElementsErrors] = useState({classroom_name: false})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate() ;

   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() ;

    const { classroom_name } = formDatas ;
    if (!classroom_name) return setIsFormElementsErrors((fe) => ({...fe, classroom_name: true}))

    setIsLoading(true) ;

    const param = {
      classroom_name
    }

    const response = await fecthService.fetch('/classroom/add', 'post', param) ;

    if(response.status == 200) {
      navigate('/dashboard/classroom')
    }

    setIsLoading(false)
  }

  return (
    <MainSection pageTitle="Ajouter une salle de classe" >
      <section className="add-form-container">
        <form onSubmit={handleSubmit} action="#">
          <InputField 
            type="text" 
            label="Nom de la classe" 
            error="Veuillez mentionner le nom de la classe"
            formDatas={formDatas}
            setFormDatas={setFormDatas}
            formErrors={isFormElementsErrors}
            setFormErrors={setIsFormElementsErrors}
            formElementKey="classroom_name"
          />

          <InputField type="submit" label="Ajouter" isLoading={isLoading} />
        </form>
      </section>
    </MainSection>
  )
}