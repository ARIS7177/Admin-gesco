import FormContainer from "../../components/Form/FormContainer";
import FormHeader from "../../components/Form/FormHeader";
import SignInForm from "./components/SignInForm";

export default function SignInPage() {
  return (
    <section  className="signin">
      <FormHeader title="Créer un compte administrateur" />
      <FormContainer >
        <SignInForm />
      </FormContainer>
    </section>
  )
}