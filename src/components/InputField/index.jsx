import React from "react";
import "./InputField.css";

const InputField = ({
  inputId,
  labelId,
  label,
  placeholder,
  value,
  onChangeFunction,
  inputType,
  requiredField,
  editable = false,
}) => {
  return (
    <>
      <div className="field-label" id={labelId}>
        <label htmlFor="">{label}</label>
      </div>
      {requiredField ? (
        <input
          type={inputType}
          required={true}
          className="form__input"
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={onChangeFunction}
        />
      ) : (
        <input
          type={inputType}
          className="form__input"
          id={inputId}
          placeholder={placeholder}
          value={value}
          onChange={onChangeFunction}
          readOnly={editable}
        />
      )}
    </>
  );
};

export default InputField;
