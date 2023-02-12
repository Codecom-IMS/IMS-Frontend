import React from "react";
import "./radioButton.css";
export default function ReportsRadioButton({
  label,
  value,
  className,
  id,
  defaultChecked,
  onChangeMethod,
}) {
  return defaultChecked ? (
    <div className="radio-button">
      <div className="radio">
        <div className={className}>
          <input
            id={id}
            type="radio"
            name="radio"
            value={value}
            onClick={(e) => onChangeMethod(e.target.value)}
            defaultChecked
          />
          <label htmlFor={id}></label>
        </div>
      </div>
      <label className="lable1">{label}</label>
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
            onClick={(e) => onChangeMethod(e.target.value)}
          />
          <label htmlFor={id}></label>
        </div>
      </div>
      <label className="lable1">{label}</label>
    </div>
  );
}
