import React from "react";

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather"
                className="weather-icon"
                src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(round.main.temp)}°C</p>
                <div className="details">
                    <span className="parameter-label">Details</span>
                </div>
                <div className="parameter-row">
                    <span className="parameter-label">Feels like</span>
                    <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                </div>
                <div className="parameter-row">
                    
                </div>
            </div>
        </div>
    )
}