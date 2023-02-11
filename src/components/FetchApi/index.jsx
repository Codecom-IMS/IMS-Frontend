export default async function FetchApi(endPoint, method, data) {
  try {
    if (method === "GET") {
      const response = await fetch(`http://localhost:5050/api/${endPoint}`, {
        method,
        headers: { "Content-type": "Application/json" },
      });
      const result = await response.json();
      if (result.status === 200) {
        return result;
      } else if(result.status === 409)
      {
        return { status: result.status};
      }
       else {
        return {message: "Data Not Found" };
      }
    } else {
      const response = await fetch(`http://localhost:5050/api/${endPoint}`, {
        method,
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status === 200) {
        return result;
      } else {
        return { message: "Data Not Found" };
      }
    }
  } catch (error) {
    throw error;
  }
}
