import React, { useState, useEffect } from "react"

import "./WeatherToday.scss"
import {Link} from "react-router-dom";

export const WeatherToday = ({weather}) => {
    // const logo = `http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`
    return (
        <>
            <div className="weather__city">
                <h3 className="weather__city-name">
                    {weather.city.name}
                    <Link to="/">
                        <p className="back-button"> ✕ </p>
                    </Link>
                </h3>
                <h1 className="weather__city-temperature">
                    {(parseFloat(weather.list[0].main.temp) - 273.15).toFixed(0)}&deg;C
                </h1>
            </div>
        </>
    )
}