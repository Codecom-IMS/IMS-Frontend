import "./form.css";
function Form({text, type, placeholder, handleChange}) {
  return (
    <div>
      <div class="form">
        <h1 className="h1">{text}</h1>
        <input type={type} class="form__input" placeholder={placeholder} onChange={(events) => handleChange(events.target.value)} />
      </div>
    </div>
  );
}

export default Form;
