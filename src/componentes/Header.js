import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
    return (
        <header>
            <h3>Countries</h3>
            <Link className="menu" to="/">Menu</Link>
        </header>
    )
}

export default Header