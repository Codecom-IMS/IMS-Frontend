import React from "react";
import "./button.css";

function Button({buttonName, buttonChange}) {
  return (
      <button className="btn btn__primary" onClick={buttonChange}>
        {buttonName}
      </button>
  );
}

export default Button;
