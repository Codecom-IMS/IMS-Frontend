export default async function FetchData(endPoint, queryString, method) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/admin/${endPoint}${queryString}`,
      {
        method,
        headers: { "content-type": "application/json" },
      }
    );
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}
