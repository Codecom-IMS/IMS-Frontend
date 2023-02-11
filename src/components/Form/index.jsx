import "./form.css";
function Form({text, type, placeholder, handleChange}) {
  return (
    <div>
      <div className="form">
        <h1 className="h1">{text}</h1>
        <input type={type} className="form__input" placeholder={placeholder} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Form;
