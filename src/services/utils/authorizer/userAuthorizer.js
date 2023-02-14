import Cookies from "js-cookie";
import fetchApi from "../../../components/FetchApi";
import { API_URL } from "../../../constants/constants";
const userAuthorizer = async () => {
  const token = Cookies.get("Jwt");
  const endPoint = "authorizer";
  const result = await fetchApi(API_URL + endPoint, "GET", {}, token);
  const isUserValid = await result.json();
  return isUserValid;
};

const adminValidator = async() => {
  const result = await userAuthorizer();
  if (!result.status || (result.status && result.role === "teacher")) {
    window.location.replace("http://localhost:3000/");
  }
  return result.role
}
const userValidator = async() => {
  const result = await userAuthorizer();
  if (!result.status) {
    window.location.replace("http://localhost:3000/");
  }
  return result.role
}

export {adminValidator, userValidator};
