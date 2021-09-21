import React, { useState, useEffect } from "react"
import './Home.scss'
import {Search} from "../Search/Search";
import Fade from "react-reveal/Fade";


export const Home = ({getNameOfCity}) => {
    return (
        <>
            <section className="home">
                <div className="container">
                    <Fade bottom>
                        <div className="home__box">
                                <h1 className="home__box-title">
                                    Welcome in Weather App
                                </h1>
                            <Search getNameOfCity={getNameOfCity}/>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}