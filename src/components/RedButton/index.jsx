import React from "react";
import "./redButton.css";
const RedButton = ({ buttonText, onSubmitHandler }) => {
  return (
    <div className="btn btn__red" onClick={onSubmitHandler}>
      <p>{buttonText}</p>
    </div>
  );
};

export default RedButton;
