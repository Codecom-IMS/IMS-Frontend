import React from "react";
import "./button.css";

function Button(props) {
  const {buttonName} =props
  return (
      <button class="btn btn__primary" onClick={props.onClick}>
        {buttonName}
      </button>
  );
}

export default Button;
