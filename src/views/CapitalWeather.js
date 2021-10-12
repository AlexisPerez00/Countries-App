import Header from "../componentes/Header"
import Loading from "../componentes/SingleCountry/Loading"
import "../styles/CapitalWeather.css"
import useFetchData from "../hooks/useFetchData"
import { useParams } from "react-router"
import { Link } from 'react-router-dom'

const CapitalWeather = () => {
    const {capital} = useParams()
    const apiKey = "8a88406f21734422b8504112210507"
    const {data} = useFetchData(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${capital}`) 
   

if(!data.location) {

    return <Loading/>
} 

return (
    <div>
        <Header/>
            <div className="capitalWeather">
                <h1>{data.location.name} weather </h1>
                    <div className="temperature">
                        <h4>Temperature : {data.current.temp_c} °C</h4>
                        <h4>Condition : {data.current.condition.text}</h4>
                        <img src={data.current.condition.icon} alt="icon"/>
                        <h4>Wind : {data.current.wind_kph} km/h</h4>
                        <h4>Humidity : {data.current.humidity} %</h4>
                        <h4>Pressure : {data.current.pressure_mb} hPa</h4>
                        <h4>Precipitation : {data.current.precip_mm} mm</h4>
                    </div>
                    <Link className="buttonBack" to={`/details/${data.location.country}`}>Go back</Link>
            </div>        
    </div>
    
)
}

export default CapitalWeather
