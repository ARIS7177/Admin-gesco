import FormContainer from "../../components/Form/FormContainer"
import FormHeader from "../../components/Form/FormHeader"
import LoginForm from "./components/LoginForm"

 export default function LoginPage() {
  return (
    <section className="login">
      <FormHeader title="Accéder à votre compte" />
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </section>
  )
}