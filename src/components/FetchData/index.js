import { API_URL } from "../../constants/constants";

export default async function FetchData(endPoint, queryString, method) {
  try {
    const response = await fetch(`${API_URL}admin/${endPoint}${queryString}`, {
      method,
      headers: { "content-type": "application/json" },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}
