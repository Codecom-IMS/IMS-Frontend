import React from "react";
import "./dropDown.css";
const DropDown = ({
  handleChange,
  defaultSelected,
  arrayOfOptions,
  readOnly,
}) => {
  const options = arrayOfOptions.map((item) => {
    return (
      <option
        className="dropDownContent"
        key={`${item}`}
        value={`${item.toLowerCase()}`}
      >
        {item}
      </option>
    );
  });
  return (
    <>
      <div className="drop-down-label">
        <label>{"Class:"}</label>
      </div>
      <select
        defaultValue={defaultSelected}
        disabled={readOnly}
        className="form__input"
        defaultChecked={true}
        onChange={handleChange}
      >
        {options}
      </select>
    </>
  );
};

export default DropDown;
