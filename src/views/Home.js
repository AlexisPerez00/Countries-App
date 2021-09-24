
import { useState } from "react"
import Header from "../componentes/Header"
import SearchCountry from "../componentes/Home/SearchCountry"
import useFetchData from "../hooks/useFetchData"
import "../styles/Home.css"
import AllCountries from "../componentes/Home/AllCountries"


const Home = () => {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10); 
    // const countriesApiKey = "21f6adeb807d67c98d9c934adc582ae2"
    // const {data} = useFetchData(`https://api.countrylayer.com/v2/all?access_key=${countriesApiKey}`)

    const {data} = useFetchData(`https://restcountries.com/v2/all
`)


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
            <div className="buttons">
                <button className="previous" onClick={Prev}>Prevous</button>
                <button className="next" onClick={Next}>Next</button>
            </div>
            
            <div className="countriesContainer">
                
                {data.slice(start, end).map((item) => (
                <AllCountries 
                key= {item.name}
                name= {item.name}
                flag= {item.flags[1]}
                />
            ))}
             </div>
            
            <div className="buttons">
                <button className="previous" onClick={Prev}>Prevous</button>
                <button className="next" onClick={Next}>Next</button>
            </div>
            
           
        </div>
    )
}

export default Home