import React from "react";
import "./dateField.css";
export default function DateField({ text, type, placeholder, onchange }) {
  return (
    <div>
      <div className="date">
        <h1 className="h1">{text}</h1>
        <input
          type={type}
          className="form__input"
          placeholder={placeholder}
          onChange={(e) => onchange(e.target.value)}
          required
        />
      </div>
    </div>
  );
}
