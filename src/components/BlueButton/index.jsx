import React from "react";
import "./blueButton.css";
const BlueButton = ({ buttonText, onSubmitHandler }) => {
  return (
    <div className="btn btn__primary" onClick={onSubmitHandler}>
      <p>{buttonText}</p>
    </div>
  );
};

export default BlueButton;
