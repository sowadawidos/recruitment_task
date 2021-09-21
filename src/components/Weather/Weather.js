import React, {useState, useEffect} from "react"
import "./Weather.scss"
import Fade from 'react-reveal/Fade';
import {WeatherToday} from "../WeatherToday/WeatherToday";
import {WeatherLongTerm} from "../WeatherForDays/WeatherLongTerm";

export const Weather = ({weather}) => {
    return (
        <>
            <section className="weather">
                <div className="container">
                    <Fade right>
                        <div className="weather__box">
                            {
                                weather && <WeatherToday weather={weather}/>
                            }
                            {
                                weather && <WeatherLongTerm weather={weather}/>
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}