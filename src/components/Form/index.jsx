import React, { useState } from "react";
import "./form.css";
import { Button } from "../index";
function Form({ text, type, placeholder, handleChange }) {
  return (
    <div>
      <form class="form">
        <h1 className="h1">{text}</h1>

        <input
          type={type}
          class="form__input"
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
