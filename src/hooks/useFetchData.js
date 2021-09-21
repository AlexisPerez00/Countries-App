import { useEffect, useState} from "react"

const useFetchData = url => {
    const [data, setData] = useState([]);


    const fetchApi = async () => {
        try {
            const res = await fetch(url)
            const results = await res.json()
            setData(results)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        fetchApi()
    })

    return {data}
}

export default useFetchData;