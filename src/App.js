import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//VIEWS
import Home from "./views/Home";
import SingleCountry from "./views/SingleCountry";
import NotFound from "./views/NotFound";
import CapitalWeather from "./views/CapitalWeather";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>

                <Route path="/details/:country" exact>
                    <SingleCountry></SingleCountry>
                </Route>
              
                <Route path="/:capital/weather">
                    <CapitalWeather></CapitalWeather>
                </Route>

                <Route path="/*">
                    <NotFound></NotFound>
                </Route>
                
            </Switch>
        </Router>
    </div>
  );
}

export default App;
