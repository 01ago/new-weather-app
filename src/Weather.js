import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

import Weatherinfo from "./Weatherinfo"


export default function Weather(props) {
 
  const [ready,setReady]=useState(false);
  const [weatherData,setWeatherData] =useState({});
  const[city,setCity]= useState(props.defaultCity);
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      coordinates:response.data.coord,
      temperature:Math.round(response.data.main.temp),
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt*1000),
      feelsLike: 3,
      icon:response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed) });
    setReady(true);
  }
  function search(){
    const apiKey= "5e495a0f30ae782754537f5c56c584c1";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event){
    event.preventDefault(); //search for city
    search();
  }
  function cityChange(event){
    setCity(event.target.value);

  }
  if (ready){
    return (
      <div className="Weather">
        <div className="weather-app backImage">
          <form onSubmit={handleSubmit} className="search-form search-form">
            <span>
              <input
                type="search"
                placeholder="  Type city"
                autoComplete="off"
                autoFocus="on"
                className="city-input"
                onChange={cityChange}
              />
              <input type="submit" value="Search" className="btn" />
              <button className="btnLocation">Current Location</button>
            </span>
          </form>
          <Weatherinfo data={weatherData}/>
          <WeatherForecast coordinates={weatherData.coordinates} />
         
          <span className="github">
            {" "}
           
            <a
              className="github-address"
              href="https://github.com/01ago/new-weather-app"
              target="_blank"
              rel="noreferrer"
            >Coded by Asli Guresci Onder
              {" "}
              {/* <i className="fab fa-github"></i> */}{" "}  <img class="github-icon" src="github_icon.png" alt=""></img>
            </a>{" "}
          </span>
       {/*    <p className="footer">Coded by Asli Guresci Onder</p> */}
        </div>
      </div>
    );
  }  else{
    
 search();

    return"Loading";
  }}
  
  

  
