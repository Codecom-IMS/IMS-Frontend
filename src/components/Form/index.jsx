import "./form.css";
function Form({ text, type, placeholder, handleChange }) {
  return (
    <div>
      <form className="form">
        <h1 className="h1">{text}</h1>

        <input
          type={type}
          className="form__input"
          placeholder={placeholder}
          min={0}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
