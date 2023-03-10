import React from "react";
import "./button.css";

function Button({ buttonName, buttonChange }) {
  return (
    <button className="btn btn__primary" onClick={buttonChange}>
      <p>{buttonName}</p>
    </button>
  );
}

export default Button;
