import React from 'react'
import { useParams } from 'react-router'
import useFetchData from '../hooks/useFetchData'

const CapitalWeather = () => {
    const {country} = useParams()
    const apiKey = "8a88406f21734422b8504112210507"
    console.log(country)
    const {data} = useFetchData(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}`) 
    console.log(data)
    return (
        <div>
            <h1>Fuciona o no</h1>
        </div>
    )
}

export default CapitalWeather
