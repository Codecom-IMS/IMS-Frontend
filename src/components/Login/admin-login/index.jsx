import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import Button from "../../Button/index";
import HeaderChip from "../../HeaderChip";
import InputField from "../../InputField/index";
import MainBox from "../../MainBox";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import "./style.css";
import Toast from "../../toast/toast";

const AdminLogin = ({ Admin }) => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const toastNotification = (message, messageType) => {
    toast(message, {
      type: messageType,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/api/admin/login`,
        { email, password }
      );

      if (response) {
        const jwt = response.data.data.token;
        Cookies.set("Jwt", jwt, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        toastNotification("Token Generated", "success");
        console.log("Jwt value: ", Cookies.get("Jwt"));
        Navigate("/admin-dashboard");
      } else {
        console.log("token not found");
      }

      if (email === "" || password === "") {
        setError(true);
      } else {
        // toastNotification("Successfully Login", "info");

        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <MainBox>
        <HeaderChip headerText={"Admin Login"} />

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
      <Toast />
    </>
  );
};

export default AdminLogin;
