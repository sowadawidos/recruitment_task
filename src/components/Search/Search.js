import React, {useState} from "react"

import search from "./search.svg"

import "./Search.scss"
import {Link} from "react-router-dom";
import HeadShake from 'react-reveal/HeadShake';

export const Search = ({getNameOfCity}) => {
    const [input, setInput] = useState('')
    const [error, setError] = useState()
    const handleInput = e => {
        setInput(e.target.value)
    }
    const handleButton = event => {
        if (input.length === 0) {
            event.preventDefault()
            setError(true)
        } else {
            setError(false)
            getNameOfCity(input)
        }
    }

    return (
        <>
            <div className="home__search">
                <form>
                    <label>
                        {
                            error ?
                                <HeadShake>
                                    <input style={error ? {border: "1px solid red"} : {}} type="text"
                                           onChange={handleInput}
                                           placeholder="Type your city name:"/>
                                </HeadShake>
                                :
                                <input style={error ? {border: "1px solid red"} : {}} type="text" onChange={handleInput}
                                       placeholder="Type your city name:"/>
                        }
                        <Link to="/weather" onClick={handleButton}>
                            <button className="search__button">
                                <img src={search} alt="search"/>
                            </button>
                        </Link>
                    </label>
                </form>
            </div>
        </>
    )
}