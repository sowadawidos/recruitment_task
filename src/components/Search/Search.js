import React, {useState} from "react"

import search from "./search.svg"

import "./Search.scss"
import {Link} from "react-router-dom";

export const Search = ({getNameOfCity}) => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
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
                        <input style={error ? {border: "1px solid red"} : {}} type="text" onChange={handleInput} placeholder="Type your city name:"/>
                        <Link to="/weather" >
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