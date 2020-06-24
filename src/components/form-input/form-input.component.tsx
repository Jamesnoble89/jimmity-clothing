import React, { FunctionComponent } from 'react'

import './form-input.styles.scss'

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string
}

const FormInput : FunctionComponent<inputProps > =({handleChange, label, ...otherProps})=>(
    <div className="group">
        <input className='form-input' onChange={handleChange}{...otherProps}/>
        {
          label ? ( <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
              {label}
          </label>): null
        }
    </div>
)

export default FormInput