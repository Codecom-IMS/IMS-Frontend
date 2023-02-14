import React from "react";
import "./dateField.css";
export default function DateField({ text, type, placeholder, onchange }) {
  return (
    <>
      <label >{text}</label>
      <div className="date">
        <input
          type={type}
          className="form__input"
          placeholder={placeholder}
          onChange={(e) => onchange(e.target.value)}
          required
        />
      </div>
    </>
  );
}
