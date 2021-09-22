import {useState, useEffect} from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./scss/main.scss";
import {Home} from "./components/Home/Home";
import {Weather} from "./components/Weather/Weather";

const API_KEY = '00b3309eefd24ede5ef63486261606b0'
const axios = require('axios');

function App() {
    const [city, setCity] = useState()
    const [weather, setWeather] = useState()

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
            .then(data => {
                setWeather(data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [city])

    const getNameOfCity = city => {
        setCity(city)
    }

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home getNameOfCity={getNameOfCity}/>
                    </Route>
                    <Route path="/weather">
                        <Weather weather={weather}/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
