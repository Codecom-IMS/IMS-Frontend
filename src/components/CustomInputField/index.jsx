import React from "react";
import "./customInputField.css";

const InputField = ({
  inputId,
  labelId,
  label,
  placeholder,
  value,
  onChangeFunction,
  inputType,
  readOnly = false,
}) => {
  return (
    <>
      <div className="field-label" id={labelId}>
        <label>{label}</label>
      </div>
      <input
        type={inputType}
        className="form__input"
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFunction}
        readOnly={readOnly}
        min={0}
      />
    </>
  );
};

export default InputField;
