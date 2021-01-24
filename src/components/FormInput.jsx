import React from 'react'

function FormInput({ label, ...otherProps }) {
    return (
        <div className="form-input">
            {label ? (
                <label className="form-input__label">{label}</label>
            ) : (null)}
            <input {...otherProps} className="form-input__input" type="text" />

        </div>
    )
}

export default FormInput
