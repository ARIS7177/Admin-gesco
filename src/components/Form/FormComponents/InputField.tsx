import { ChangeEvent, useId } from "react"
import { InputFieldProps } from "./interfaces/InputFieldProps";

export default function InputField({ 
  type, 
  label, 
  error,
  formDatas,
  setFormDatas,
  formErrors,
  setFormErrors,
  formElementKey, 
  isLoading,
}: InputFieldProps) {
  
  const id = useId() ;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if(formErrors && formElementKey && formErrors[formElementKey]) {
      setFormErrors && setFormErrors({...formErrors, [formElementKey]: false})
    }

    setFormDatas && formElementKey && setFormDatas({...formDatas, [formElementKey]: e.target.value})
  }

  if (type == 'password') {
    return (
      <div className="input-field-container">
        <div className="input-field">
          <input
            onChange={handleChange}
            id={id} 
            type={type} 
            value={formDatas && formElementKey && formDatas[formElementKey]} 
          />
          <label 
            className={formDatas && formElementKey && formDatas[formElementKey] && 'label-top'} 
            htmlFor={id}
          >
            <span>
              { label }
            </span>
          </label>
        </div>  
        <small>
          { formErrors && formElementKey && formErrors[formElementKey] && error }
        </small>
      </div>

    )
  } else if (type == 'submit') {
    return (
      <div className="input-field-container">
        {
          isLoading ? 
            <div className="submit-loading">
              <div className="spinner"></div>
            </div>
          :
            <div className="input-field submit">
              <input type={type} value={label} />
            </div>
        }
      </div>
    )
  } else {
    return (
      <div className="input-field-container">
        <div className="input-field">
          <input 
            onChange={handleChange}
            id={id} 
            type={type}
            value={formDatas && formElementKey && formDatas[formElementKey]} 
          />
          <label 
            htmlFor={id}
            className={formDatas && formElementKey && formDatas[formElementKey] && 'label-top'} 
          >
            <span>
              { label }
            </span>
          </label>
        </div>
        <small>
          { formErrors && formElementKey && formErrors[formElementKey] && error }
        </small>
      </div>
    )
  }
  
}