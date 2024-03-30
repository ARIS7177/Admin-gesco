import { ChangeEvent, useEffect } from "react"
import { SelectFieldProps } from "./interfaces/SelectFieldProps"

export default function SelectField({ 
  label, 
  options, 
  error,
  formDatas,
  setFormDatas,
  formErrors,
  setFormErrors,
  formElementKey, 
}: SelectFieldProps) {
 
  useEffect(() => {
    if(formDatas && formElementKey && formDatas[formElementKey]) {
      
    }
  })
  
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    if(formErrors && formElementKey && formErrors[formElementKey]) {
      setFormErrors({...formErrors, [formElementKey]: false})
    }

    setFormDatas({...formDatas, [formElementKey]: e.target.value})
  }

  return (
    <div className="select-field-container">
      <div className="select-field">
        <select 
          onChange={handleChange} 
          value={ formDatas && formElementKey && formDatas[formElementKey]}
        >
          <option value="none">{ label }</option>
          {
            options.map((item) => {
              return <option key={item.value} value={item.value}> { item.text } </option>
            })
          }
        </select>
      </div>
      <small>
          { formErrors && formElementKey && formErrors[formElementKey] && error }
      </small>
    </div>

  )
   
}