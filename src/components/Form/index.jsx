import "./form.css";
function Form({ text, type, placeholder, handleChange }) {
  const options = [
    <option className="dropDownContent" key="PG" value="PG">PG</option>,
    <option className="dropDownContent" key="Nursery" value="Nursery">Nursery</option>,
    <option className="dropDownContent" key="KG" value="KG">KG</option>,
  ];
  for (let i = 1; i < 11; i++) {
    options[i+2] = <option className="dropDownContent" key={i} value={`${i}`}>{i}</option>;
  }
  return (
    <div>
      <div className="form">
        <h1 className="h1">{text}</h1>
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
    </div>
  );
}

export default Form;
