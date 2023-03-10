import React from "react";
import "./loginButton.css";

function Button(props) {
  return (
    <button className="btn btn__primary">
      <p>{props.value}</p>
    </button>
  );
}

export default Button;
