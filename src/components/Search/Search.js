import React, { useState, useEffect } from "react"

import search from "./search.svg"

import "./Search.scss"

export const Search = () => {
    return (
        <>
            <div className="home__search">
                <label>
                    <input type="text"/>
                    <button className="search__button">
                        <img src={search} alt="search"/>
                    </button>
                </label>
            </div>
        </>
    )
}