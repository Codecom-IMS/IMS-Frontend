
const fetchApi = async (url, callMethod, requsetBody) => {
    try {
        return (callMethod === "GET") ? await fetch(url, {
            method: callMethod,
            headers: { "Content-type": "Application/json" },
        }) : await fetch(url, {
            method: callMethod,
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify(requsetBody)
        });
    } catch (error) {
        console.log(error)
    }
}

export default fetchApi