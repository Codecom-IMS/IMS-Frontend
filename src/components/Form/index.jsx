import React from "react";
import "./form.css";
function Form({text, type, placeholder,id,onchange}) {
  return (
    <div>
      <div class="form">
        <h1 className="h1">{text}</h1>
        <input type={type} class="form__input" placeholder={placeholder} onChange={(e)=>onchange(e.target.value)} required/>
      </div>
    </div>
  );
}

export default Form;
