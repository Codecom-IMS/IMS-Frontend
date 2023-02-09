import React from "react";
import "./InputField.css";

const InputField = ({ inputId,labelId,label, placeholder, value, onChangeFunction, inputType }) => {
    return (
        <>
            <div className="field-label" id={labelId}><label htmlFor="">{label}</label></div>
            <input type={inputType} className="form__input" id={inputId} placeholder={placeholder} value={value} onChange={onChangeFunction} />
        </>
    )
}

export default InputField
