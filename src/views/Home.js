
import { useState } from "react"
import Header from "../componentes/Header"
import SearchCountry from "../componentes/Home/SearchCountry"
import useFetchData from "../hooks/useFetchData"
import "../styles/Home.css"
import AllCountries from "../componentes/Home/AllCountries"


const Home = () => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10); 

    const {data} = useFetchData(`https://restcountries.eu/rest/v2/all`)


    const Next = () => {
        setStart(start + 30)
        setEnd(end +  30)

        if(end === 250) {
            setStart(238)
            setEnd(250)
        }
    }

    const Prev = () => {
        setStart(start - 30);
        setEnd(end - 30)

        if(start === 0) {
            setStart(0);
            setEnd(30)
        }
    }
    
    return (
        <div className="container">
            <Header/>

            <SearchCountry/>

            <div className="countriesContainer">
                
                {data.slice(start, end).map((item) => (
                <AllCountries 
                key= {item.name}
                name= {item.name}
                flag= {item.flag}
                />
            ))}
             </div>

            <button onClick={Prev}>Prevous</button>
            <button onClick={Next}>Next</button>
           
        </div>
    )
}

export default Home