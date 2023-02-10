import React from "react";
import "./dataField.css";
function Field({ data, text }) {
  return (
    <div className="field_div">
      <div className="field__input">
        {text} <span className="span__head">{data}</span>
      </div>
    </div>
  );
}

export default Field;
