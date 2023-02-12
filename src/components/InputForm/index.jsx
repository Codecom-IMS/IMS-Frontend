import React from "react";
import "./inputForm.css";
function Form({ text, type, placeholder, onchange }) {
  const options = [
    <option className="dropDownContent" key="PG" value="pg">
      PG
    </option>,
    <option className="dropDownContent" key="Nursery" value="nursery">
      Nursery
    </option>,
    <option className="dropDownContent" key="KG" value="kg">
      KG
    </option>,
  ];
  for (let i = 1; i < 11; i++) {
    options.push(
      <option className="dropDownContent" key={`${i}`} value={`${i}`}>
        {i}
      </option>
    );
  }
  return (
    <div>
      <div className="form">
        <h1 className="h1">{text}</h1>
        {type === "classes" ? (
          <select
            className="form__input"
            onChange={(e) => onchange(e.target.value)}
          >
            {options}
          </select>
        ) : (
          <input
            type={type}
            className="form__input"
            placeholder={placeholder}
            onChange={(e) => onchange(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default Form;
