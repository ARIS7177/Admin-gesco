import SignInFormContainer from "./components/SignInFormContainer";
import SignInHeader from "./components/SignInHeader";

export default function SignInPage() {
  return (
    <section  className="signin">
      <SignInHeader />
      <SignInFormContainer />
    </section>
  )
}