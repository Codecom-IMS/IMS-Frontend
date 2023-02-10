import axios from "axios";
import { useState } from "react";
import Button from "../Button";
import InputField from "../InputField";
import "./login.css";

const LoginPage = ({ Admin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("working");

    const { data } = await axios.post(
      `http://localhost:5000/api/admin/admins`,
      { email, password }
    );
    console.log("Response", data);

    if (email === "" || password === "") {
      setError(true);
      console.log("in if");
    } else {
      setError(false);
      console.log("in else");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {console.log(error)}
        {error && (
          <p style={{ color: "red" }}>Email/Password  requried.</p>
        )}
        <div>
          <h1 className="label-design">
            <label htmlFor="email">{"Email"}</label>
          </h1>

          <InputField
            value={email}
            placeholder={"Enter Your Email"}
            className={"form__input"}
            type={"email"}
            id={"email"}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="gap">
          <h1 className="label-design">
            <label htmlFor="password">{"Password"}</label>
          </h1>

          <InputField
            value={password}
            placeholder={"Enter Your Password"}
            className={"form__input"}
            type={"password"}
            id={"password"}
            require={"true"}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button type="submit" value="LOGIN" />
      </form>
    </>
  );
};

export default LoginPage;
