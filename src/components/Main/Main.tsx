import LeftBar from "../LeftBar/LeftBar";
import { MainProps } from "./MainProps";

export default function MainSection({pageTitle, children}: MainProps) {
  return (
    <main className="main">
      <LeftBar />
      <section className="main-section">
        <h1>
          <span>{ pageTitle }</span>
        </h1>
      </section>
    </main>
  )
}