import "./inputForm.css";
function Form({ text, type, placeholder, handleChange }) {
  const options = [
    <option className="dropDownContent" key="PG" value="pg">
      PG
    </option>,
    <option className="dropDownContent" key="Nursery" value="nursery">
      Nursery
    </option>,
    <option className="dropDownContent" key="KG" value="kg">
      KG
    </option>,
  ];
  for (let i = 1; i < 11; i++) {
    options.push(
      <option className="dropDownContent" key={`${i}`} value={`${i}`}>
        {i}
      </option>
    );
  }
  return (
    <>
      <div className="divform">
        <label>{text}</label>
        {type === "classes" ? (
          <select className="form__input" onChange={handleChange}>
            {options}
          </select>
        ) : (
          <input
            type={type}
            className="form__input"
            placeholder={placeholder}
            onChange={handleChange}
          />
        )}
      </div>
    </>
  );
}

export default Form;
