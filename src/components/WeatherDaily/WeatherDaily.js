import React, { useState, useEffect } from "react"

export const WeatherDaily = ({day, key, temp}) => {
    const date = new Date(day * 1000).toLocaleString('en-US', {weekday: 'long'})
    const hours = new Date(day * 1000).toLocaleString('en-US', {hour: "numeric"})
    return (
        <>
            <div className="weather__long-term-day" key={key}>
                <div className="weather__long-term-day-name">
                    {date}
                </div>
                <div className="weather__long-term-day-temperature">
                    {(parseFloat(temp) - 273.15).toFixed(0)}&deg;C
                </div>
            </div>
        </>
    )
}