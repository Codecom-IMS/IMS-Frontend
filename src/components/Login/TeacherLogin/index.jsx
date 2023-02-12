import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../LoginButton/index";
import HeaderChip from "../../LoginHeaderChip";
import InputField from "../../InputField/index";
import MainBox from "../../MainBox";
import Cookies from "js-cookie";
import "./teacherlogin.css";

const TeacherLogin = ({ Teacher }) => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/teacher/login`,
        { email, password }
      );

      if (response) {
        const jwt = response.data.data.token;
        Cookies.set("Jwt", jwt, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        console.log("Teacher Token: ", Cookies.get("Jwt"));
        Navigate("/teacher-dashboard");
      } else {
        console.log("teacher login failed");
      }

      if (email === "" || password === "") {
        setError(true);
      } else {
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <MainBox>
        <HeaderChip headerText={"Teacher Login"} />

        <div className="card-container">
          <form className="form" onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>Email/Password requried.</p>}
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
        </div>
      </MainBox>
    </>
  );
};

export default TeacherLogin;
