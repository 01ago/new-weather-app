import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Milano",
    country: "Italy",
    update: "Last updated 10:00",
    feelsLike: 3,
    humidity: 25,
    wind: 6
  };
  return (
    <div className="Weather">
      <div className="weather-app backImage">
        <form className="search-form search-form">
          <span>
            <input
              type="search"
              placeholder="  Type city"
              autocomplete="off"
              autofocus="on"
              className="city-input"
            />
            <input type="submit" value="Search" className="btn" />
            <button className="btnLocation">Current Location</button>
          </span>
        </form>
        <span className="cityspan">
          <h1 className="city">{weatherData.city}</h1>{" "}
        </span>
        <span className="countryspan">
          <h1 className="country">{weatherData.country} </h1>
        </span>

        <div className="date"> {weatherData.update}</div>

        <div className="row">
          <div className="col-6 weather-temp">
            <img src="" className="weathericon" alt="" />
            <p></p>
            <img src="" alt="" className="mainicon" />
            <span className="temperature"> 20</span>
            <span className="units">
              <a href="/" className="celcius active">
                °C
              </a>{" "}
              |
              <a href="/" className="fahrenheit">
                °F
              </a>
            </span>
            <p className="feelslike">
              Feels like: {weatherData.feelsLike}°{" "}
              <span className="feels"> </span>
            </p>
          </div>
          <span className="humidp">
            {" "}
            Humidity: {weatherData.humidity} <span className="humid"> </span> %{" "}
          </span>
          <span className="windp">
            {" "}
            Wind: {weatherData.wind}
            <span className="wind"></span> Km/h{" "}
          </span>
          <div className="nextdays">Next 3 days</div>
          <div className="row weather-forecast">
            <div className="col-2">
              <h3> Sun</h3>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
                alt=""
              />
              <div className="weather-forecast-temperature">
                <strong>22°</strong> 17°
              </div>
            </div>
            <div className="col-2">
              <h3> Mon</h3>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
                alt=""
              />
              <div className="weather-forecast-temperature">
                <strong>22°</strong> 17°
              </div>
            </div>
            <div className="col-2">
              <h3>Tue</h3>
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
                alt=""
              />
              <div className="weather-forecast-temperature">
                <strong>22°</strong> 17°
              </div>
            </div>
          </div>
        </div>
        <span className="githubicon">
          {" "}
          <a
            className="github-icon"
            href="https://github.com/lmnlfrz/weather-app-github"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <i className="fab fa-github"></i>{" "}
          </a>{" "}
        </span>
        <p className="footer">Coded by Asli Guresci Onder</p>
      </div>
    </div>
  );
}
