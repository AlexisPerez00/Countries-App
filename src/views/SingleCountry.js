import { useParams } from "react-router"
import { Link } from "react-router-dom"
import useFetchData from "../hooks/useFetchData"
import Header from "../componentes/Header"
import Loading from "../componentes/SingleCountry/Loading"
import "../styles/SingleCountry.css"



const SingleCountry = () => {
    const {country} = useParams()
    const {data} = useFetchData(`https://restcountries.eu/rest/v2/name/${country}`) 

    if(!data[0]) {

        return <Loading/>
    } 

    return (
        <div>
            <Header/>
            <div className="singleCountry">
                <div className="country">
                    <h1>{data[0].name}</h1>
                    <img src={data[0].flag} alt="flag"/>
                </div>
                <div className="countryInfo">
                    <h3>Region</h3> <p>{data[0].region}</p>
                    <h3>Subregion</h3> <p>{data[0].subregion}</p>
                    <div className="capital">
                        <h3>Capital</h3> <p>{data[0].capital}</p>
                        <Link className="capitalWheather" to={`/capital-weather/${data[0].name}`}>See the weather</Link>
                    </div>
                    
                    <h3>Population</h3> <p>{data[0].population}</p>
                    <h3>Language</h3> <p>{data[0].languages[0].name}</p>
                    <h3>Area</h3> <p>{data[0].area} km²</p>
                </div>
            </div>
        </div>
    )
}

export default SingleCountry