import React from "react";
import { BlueButton, RedButton } from "../index";
import "./popUp.css";
import Cookies from "js-cookie";

const PopUp = ({
  onClickBlueButton,
  redButtonAction,
  deleteUserFuntion,
  messageText,
}) => {
  const onSubmitHandlers = {
    logout: () => {
      Cookies.remove("Jwt");
      window.location.reload();
    },
    delete: deleteUserFuntion,
  };

  return (
    <>
      <div className="wrapper-container">
        <div className="pop-up-box">
          <span className="pop-up-message">{messageText}</span>
          <div className="pop-up-buttons-container">
            <BlueButton
              buttonText={"Cancel"}
              onSubmitHandler={onClickBlueButton}
            />
            <RedButton
              buttonText={"Confirm"}
              onSubmitHandler={onSubmitHandlers[redButtonAction]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
