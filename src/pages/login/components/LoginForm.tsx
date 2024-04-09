import { FormEvent, useState } from "react";
import InputField from "../../../components/Form/FormComponents/InputField";
import { Admin } from "../../../services/Admin";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [formDatas, setFormDatas] = useState({email: '', password: ''}) ;
  const [isFormElementsErrors, setIsFormElementsErrors] = useState({email: false, password: false})
  const [allowSubmit, setAllowSubmit] = useState(true) ;
  const [isLoading, setIsLoading] = useState(false) ;
  const navigate = useNavigate()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() ;

    // Si le formulaire a déjà été soumit (Evite les doublons)
    if(!allowSubmit) {
      return ;
    }

    const { email, password } = formDatas ;

    // DEBUT DES VERIFICATIONS
    
    if(!email || !password) {
      !email && setIsFormElementsErrors(err => ({...err, email: true})) ;
      !password && setIsFormElementsErrors(err => ({...err, password: true})) ;

      return 
    }
    // FIN DES VERIFICATIONS

    const user: any = {...formDatas};

    setIsLoading(true)
    setAllowSubmit(false)
    
    // const base = 'http://localhost:3333/api' ;
    const base = 'http://localhost:63829/api' ;
    const options: RequestInit = {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let response, datas: any = false  ;

    try {
      response = await fetch(base + '/login', options) ;
      datas = await response.json() ;

      const { status }  = datas ;
      
      if(status == 200) {
        const {token, user} = datas ;
  
        Admin.authenticate(token , user) ;
  
        navigate('/dashboard') ;
        
      }

      
    } catch (e) {
      console.log(e);
      
    } finally {
      setIsLoading(false)
      setAllowSubmit(true)

    }

  }

  return (
    <form onSubmit={handleSubmit}>

      {
        !allowSubmit && <div className="form-protection"></div>
      } 

      <InputField 
        type="text" 
        label="Email" 
        error="Veuillez mentionner l'email"
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        formErrors={isFormElementsErrors}
        setFormErrors={setIsFormElementsErrors}
        formElementKey="email"
        />

      <InputField 
        type="password" 
        label="Mot de passe" 
        error="Veuillez mentionner le mot de passe"
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        formErrors={isFormElementsErrors}
        setFormErrors={setIsFormElementsErrors}
        formElementKey="password"
        />

      <InputField type="submit" label="Se connecter" isLoading={isLoading} />

      <div className="no-account">
          <span>Pas de compte ? </span> <Link to={'/signin'}> Créez en un.</Link>
      </div>
    </form>
  )
}