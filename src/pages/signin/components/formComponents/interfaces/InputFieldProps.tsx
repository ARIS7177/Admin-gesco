import { Dispatch, SetStateAction } from "react"

export interface InputFieldProps {
  type: string,
  label: string,
  error?: string,
  formDatas?: FormData,
  setFormDatas?: Dispatch<SetStateAction<any>>,
  formErrors?: FormError,
  setFormErrors?: Dispatch<SetStateAction<any>>,
  formElementKey?: string,
  isLoading?: boolean
}

interface FormData {
  [key: string]: string
}

interface FormError {
  [key: string]: boolean
}