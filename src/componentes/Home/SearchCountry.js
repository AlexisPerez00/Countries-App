import { Link } from "react-router-dom"
import "../../styles/SearchCountry.css"
import { useState } from "react"

const SearchCountry = ({setCountryName}) => {
    const [country, setCountry] = useState("")

    const handleName = (e) => {
        setCountry(e.target.value)
    }
    return (
        <form>
            <input className="barraBuscadora" type="text" onChange={handleName}/>
            <Link className="botonBuscador" to={`/details/${country}`}>Search</Link>
        </form>
    )
}

export default SearchCountry 