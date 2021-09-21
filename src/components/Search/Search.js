import React, { useState, useEffect } from "react"

import search from "./search.svg"

import "./Search.scss"
import {Link} from "react-router-dom";

export const Search = ({getNameOfCity}) => {
    const [input, setInput] = useState()

    const handleInput = e => {
        setInput(e.target.value)
    }
    const handleButton = () => {
        getNameOfCity(input)
    }
    return (
        <>
            <div className="home__search">
                <form>
                    <label>
                        <input type="text" onChange={handleInput}/>
                        <Link to="/weather">
                            <button className="search__button" onClick={handleButton}>
                                <img src={search} alt="search"/>
                            </button>
                        </Link>
                    </label>
                </form>
            </div>
        </>
    )
}