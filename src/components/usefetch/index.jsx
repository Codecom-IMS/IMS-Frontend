import { useEffect, useState } from "react"

const useFetch =(url)=>{
    const [data , setData] = useState(null)

    useEffect(()=>{
        const getData=async()=>{
            const response = await fetch(url)
            const responseData = response.json()
            setData(responseData)
        };
        getData();
    },[url]
    );
    return [data]

}
export default useFetch