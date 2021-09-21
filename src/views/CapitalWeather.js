import React from 'react'
import { useParams } from 'react-router'

const CapitalWeather = () => {
    const {country} = useParams()
    console.log(country)
    // const {data} = useFetchData(`https://restcountries.eu/rest/v2/name/${country}`) 

    return (
        <div>
            <h1>Fuciona o no</h1>
        </div>
    )
}

export default CapitalWeather
