import React from "react"
import "./Weather.scss"
import Fade from 'react-reveal/Fade';
import {WeatherToday} from "../WeatherToday/WeatherToday";
import {WeatherLongTerm} from "../WeatherForDays/WeatherLongTerm";
import ReactLoading from 'react-loading';

export const Weather = ({weather}) => {
    return (
        <>
            <section className="weather">
                <div className="container">
                    <Fade right>
                        <div className="weather__box">
                            {
                                !weather &&
                                <>
                                    <div className="weather__loading">
                                        <ReactLoading type='spin' color="#ffffff" height={50} width={50} />
                                    </div>
                                </>

                            }
                            {
                                weather && <Fade top><WeatherToday weather={weather}/></Fade>
                            }
                            {
                                weather && <Fade bottom><WeatherLongTerm weather={weather}/></Fade>
                            }
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}