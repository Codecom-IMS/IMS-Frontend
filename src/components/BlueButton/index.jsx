import React from "react";
import './BlueButton.css'
const BlueButton = ({ buttonText , onSubmitHandler,}) => {
    return (
        <div className="btn btn__primary" onClick={onSubmitHandler}>
            <p>{buttonText}</p>
        </div>
    )
}

export default BlueButton