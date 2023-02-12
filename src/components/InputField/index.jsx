import React from "react";
const InputField = ({
  label,
  name,
  type,
  onChange,
  className,
  placeholder,
  value,
}) => (
  <div>
    <label className="label-design" htmlFor={name}>
      {label}
    </label>
    <input
      className={className}
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
