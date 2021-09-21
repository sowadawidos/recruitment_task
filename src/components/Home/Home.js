import React, { useState, useEffect } from "react"
import './Home.scss'
import {Search} from "../Search/Search";


export const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="home__box">
                        <Search/>
                    </div>
                </div>
            </section>
        </>
    )
}