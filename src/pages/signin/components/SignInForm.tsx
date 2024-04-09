import { FormEvent, useState } from "react";
import InputField from "../../../components/Form/FormComponents/InputField";
import SelectField from "../../../components/Form/FormComponents/SelectField"; 
import { Admin } from './../../../services/Admin';
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function SignInForm () {
  const [formDatas, setFormDatas] = useState({
    email: '',
    telephone: '',
    password: '',
    confirmPassword: '',
    role: '',
  })
  const [isFormElementsErrors, setIsFormElementsErrors] = useState({
    email: false,
    telephone: false,
    password: false,
    confirmPassword: false,
    role: false,
  })
  const [isLoading, setIsLoading] = useState(false) ;
  const [allowSubmit, setAllowSubmit] = useState(true) ;
  const roles = [
    {
      value: '0',
      text: 'Administrateur'
    },
    {
      value: '1',
      text: 'Super administrateur'
    },
  ]

  const navigate = useNavigate() ;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() ;

    // Si le formulaire a déjà été soumit (Evite les doublons)
    if(!allowSubmit) {
      return ;
    }

    const { email, telephone, password, confirmPassword, role } = formDatas ;

    // DEBUT DES VERIFICATIONS
    if (password ) {
      if (password != confirmPassword) {
        setIsFormElementsErrors(err => ({...err, confirmPassword: true})) ;
        return 
      }
    }
    
    if(!email || !telephone || !password || !role) {
      !email && setIsFormElementsErrors(err => ({...err, email: true})) ;
      !telephone && setIsFormElementsErrors(err => ({...err, telephone: true})) ;
      !password && setIsFormElementsErrors(err => ({...err, password: true})) ;
      !role && setIsFormElementsErrors(err => ({...err, role: true})) ;

      return 
    }
    // FIN DES VERIFICATIONS

    const user: any = {...formDatas, isSuperAdmin: role == '0' ? false : true} ; 

    delete user.confirmPassword ;
    delete user.role ;

    setIsLoading(true)
    setAllowSubmit(false)
    
    // const base = 'http://localhost:63829/' ;
    const base = 'http://localhost:63829/' ;
    const options: RequestInit = {
      headers:{
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(user),
    }

    let response, datas: any = false  ;

    try {
      response = await fetch(base + 'api/signin', options) ;
      datas = await response.json() ;

      console.log(datas);
      

      const { status }  = datas ;

      if(status == 200) {
        const {token, user} = datas ;

        Admin.authenticate(token , user) ;
        navigate('/dashboard') ;
      } else {
        const { message } = datas 

        alert(message)
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
        type="text" 
        label="Téléphone" 
        error="Veuillez mentionner le téléphone"
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        formErrors={isFormElementsErrors}
        setFormErrors={setIsFormElementsErrors}
        formElementKey="telephone"
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
      <InputField 
        type="password" 
        label="Confirmer Mot de passe" 
        error="Veuillez confirmer le mot de passe"
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        formErrors={isFormElementsErrors}
        setFormErrors={setIsFormElementsErrors}
        formElementKey="confirmPassword"
      />
      
      <SelectField 
        label="Sélectionner un rôle" 
        options={roles} 
        error="Veuillez selectionner un role"
        formDatas={formDatas}
        setFormDatas={setFormDatas}
        formErrors={isFormElementsErrors}
        setFormErrors={setIsFormElementsErrors}
        formElementKey="role"
      />

      <InputField type="submit" label="S'inscrire" isLoading={isLoading} />
      <div className="no-account">
        <span>Déjà membre ? </span> <Link to={'/'}> Connectez-vous.</Link>
      </div>
    </form>
  )
}