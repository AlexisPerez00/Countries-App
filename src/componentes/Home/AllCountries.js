import { Link } from "react-router-dom"
import "../../styles/AllCountries.css"

const AllCountries = ({ name, flag }) => {
    return (
        <div className="allcountries">

      <h2>{name}</h2>
      <img src={flag} alt={name} />
      <Link className="details" to={`/details/${name}`}>See details</Link>


        </div>
    )
}

export default AllCountries