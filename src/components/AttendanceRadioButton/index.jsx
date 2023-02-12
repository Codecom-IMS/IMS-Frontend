import React from "react";
import "./AttendanceRadioButton.css";
const RadioButton = ({ label, value, className, id, onChange, name }) => {
  return (
    <div className="radio-button">
      <div className="radio">
        <div className={className}>
          <input
            id={id}
            type="radio"
            name={name}
            value={value}
            onClick={onChange}
          />
          <label htmlFor={id}></label>
        </div>
      </div>
      <label style={{ paddingLeft: "10px" }}>{label}</label>
    </div>
  );
};

export default RadioButton;
