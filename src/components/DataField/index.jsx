import React from "react";
import "./dataField.css";
function Field({data, text}) {
  return (
    <div>
      <h1>{text}</h1>
      <div className="field__input">{data}</div>
    </div>
  );
}

export default Field;
