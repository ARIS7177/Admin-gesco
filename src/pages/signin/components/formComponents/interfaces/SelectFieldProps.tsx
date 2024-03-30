
import { Dispatch, SetStateAction } from 'react';
export interface SelectFieldProps {
  label: string,
  options: Option[],
  error: string,
  formDatas: FormData,
  setFormDatas: Dispatch<SetStateAction<any>>,
  formErrors: FormError,
  setFormErrors: Dispatch<SetStateAction<any>>,
  formElementKey: string,
}

interface Option {
  value: string,
  text: string,
}

interface FormData {
  [key: string]: string
}

interface FormError {
  [key: string]: boolean
}