import React from "react"

import "./WeatherDaily.scss"

export const WeatherDaily = ({day, key, temp, temp_min, temp_max, weather}) => {
    const date = new Date(day * 1000).toLocaleString('en-US', {weekday: 'long'})
    const logo = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`
    return (
        <>
            <div className="weather__long-term-day" key={key}>
                <div className="weather__long-term-day-box">
                    <div className="weather__long-term-day-name">
                        {date}
                    </div>
                    <div className="weather__long-term-day-temperature">
                        {(parseFloat(temp) - 273.15).toFixed(0)}&deg;C
                        { logo && <img src={logo} alt=""/>}
                    </div>
                </div>
                <div className="weather__long-term-day-average-box">
                    <div className="weather__long-term-day-average">
                        Min: {(parseFloat(temp_min) - 273.15).toFixed(0)}&deg;C
                    </div>
                    <div className="weather__long-term-day-average">
                        Max: {(parseFloat(temp_max) - 273.15).toFixed(0)}&deg;C
                    </div>
                </div>
            </div>
        </>
    )
}