import React from "react"

import "./WeatherLongTerm.scss"
import {WeatherDaily} from "../WeatherDaily/WeatherDaily";

export const WeatherLongTerm = ({weather}) => {
    const fiveDaysWeatherFiltered = weather.list.filter(element => new Date(element.dt * 1000).toLocaleTimeString() === '14:00:00')
    console.log(fiveDaysWeatherFiltered)
    return (
        <>
            <div className="weather__long-term">
                {
                    fiveDaysWeatherFiltered.map((element, key) => <WeatherDaily day={element.dt} key={key}
                                                                                temp={element.main.temp}
                                                                                temp_min={element.main.temp_min}
                                                                                temp_max={element.main.temp_max}
                                                                                weather={element}/>)
                }
            </div>
        </>
    )
}