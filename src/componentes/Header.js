import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
    return (
        <header>
            <div className="leftPart">
                <h3>Wiki-World</h3>                
                <img src="https://cdn-icons-png.flaticon.com/512/5640/5640222.png" alt="icon"></img>

            </div>
            
            <Link className="menu" to="/">Home</Link>
        </header>
    )
}

export default Header

