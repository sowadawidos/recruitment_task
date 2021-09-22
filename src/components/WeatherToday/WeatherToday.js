import React from "react"

import "./WeatherToday.scss"
import {Link} from "react-router-dom";

export const WeatherToday = ({weather}) => {
    return (
        <>
            <div className="weather__city">
                <>
                    <h3 className="weather__city-name">
                        {weather.city.name}
                        <Link to="/">
                            <p className="back-button"> ✕ </p>
                        </Link>
                    </h3>
                    <h1 className="weather__city-temperature">
                        {(parseFloat(weather.list[0].main.temp) - 273.15).toFixed(0)}&deg;C
                    </h1>
                </>
            </div>
        </>
    )
}