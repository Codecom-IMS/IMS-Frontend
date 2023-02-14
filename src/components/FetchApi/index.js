const fetchApi = async (url, callMethod, requsetBody,token) => {
  try {
    return callMethod === "GET"
      ? await fetch(url, {
          method: callMethod,
          headers: { "Content-type": "Application/json", "Authorization": `Bearer ${token}`},
        })
      : await fetch(url, {
          method: callMethod,
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify(requsetBody),
        });
  } catch (error) {
    console.log(error);
  }
};

export default fetchApi;
