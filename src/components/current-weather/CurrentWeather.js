import "./CurrentWeather.css";
import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="CurrentWeather">
      <div className="top">
        <div>
          <p className="city-name">{data.city}</p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>

        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="row">
            <span className="label">Details</span>
          </div>
          <div className="row">
            <span className="label">Feels Like</span>
            <span className="value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="row">
            <span className="label">Wind</span>
            <span className="value">{data.wind.speed} m/s</span>
          </div>
          <div className="row">
            <span className="label">Humidity</span>
            <span className="value">{data.main.humidity}%</span>
          </div>
          <div className="row">
            <span className="label">Pressure</span>
            <span className="value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
