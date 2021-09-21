import { Link } from "react-router-dom"
import "../styles/NotFound.css"

const NotFound = () => {
    return (
        <div className="errorContainer">
            <h5>Error 404</h5>
            <p>Not Found :(</p>
            <Link className="back" to="/">Back to the menu</Link>
        </div>
    )
}

export default NotFound