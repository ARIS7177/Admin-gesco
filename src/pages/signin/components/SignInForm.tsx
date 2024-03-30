import { FormEvent, useState } from "react";
import InputField from "./formComponents/InputField";
import SelectField from "./formComponents/SelectField";

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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
    
    console.log(user);
    
    setTimeout(() => {
      setIsLoading(false)
      setAllowSubmit(true)
    }, 2500);
    
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
        label="Confrimer Mot de passe" 
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
    </form>
  )
}