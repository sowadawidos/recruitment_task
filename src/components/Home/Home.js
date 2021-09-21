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
                            <Search getNameOfCity={getNameOfCity}/>
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    )
}