import React from "react";
import "./RadioButton.css";
const RadioButton = ({
  label,
  value,
  className,
  id,
  defaultChecked,
  onChangeGender,
}) => {
  return defaultChecked ? (
    <div className="radio-button">
      <div className="radio">
        <div className={className}>
          <input
            id={id}
            type="radio"
            name="radio"
            value={value}
            onClick={onChangeGender}
            defaultChecked
          />
          <label htmlFor={id}></label>
        </div>
      </div>
      <label>{label}</label>
    </div>
  ) : (
    <div className="radio-button">
      <div className="radio">
        <div className={className}>
          <input
            id={id}
            type="radio"
            name="radio"
            value={value}
            onClick={onChangeGender}
          />
          <label htmlFor={id}></label>
        </div>
      </div>
      <label>{label}</label>
    </div>
  );
};

export default RadioButton;
