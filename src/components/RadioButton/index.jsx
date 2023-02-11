import React from "react";
import './RadioButton.css'
const RadioButton = ({ label, value, className, id, defaultChecked, onChange, name }) => {
    return (
        defaultChecked === "P"? <div className="radio-button">
            <div className="radio">
                <div className={className}>
                    <input id={id} type="radio" name="radio" value={value} onClick={onChange} checked />
                    <label htmlFor={id} ></label>
                </div>
            </div>
            <label style={{paddingLeft:"10px"}}>{label}</label>
        </div> : <div className="radio-button">
            <div className="radio">
                <div className={className}>
                    <input id={id} type="radio" name={name} value={value} onClick={onChange}/>
                    <label htmlFor={id} ></label>
                </div>
            </div>
            <label style={{paddingLeft:"10px"}}>{label}</label>
        </div>
    )

}

export default RadioButton