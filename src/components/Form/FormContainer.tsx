import { ReactNode } from "react"

interface FormContainerProps {
  children: ReactNode
}

export default function FormContainer ({ children }: FormContainerProps) {
  return (
    <article className="signin-form-container">
      <div className="bg"></div>
      { children }
    </article>
  )
}