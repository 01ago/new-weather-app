import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
         console.log(response.data); 
    }
   console.log(props);
    let apiKey="5e495a0f30ae782754537f5c56c584c1";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat; 
  
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; 
    
    
    axios.get(apiUrl).then(handleResponse);
    return(
      <div className="WeatherForecast">  
      <div className="nextdays">Next 3 days</div>
<div className="row weather-forecast">
  <div className="col-2">
    <h3 className="forecastDays"> Sun</h3>
    <span className="forecasticon"><WeatherIcon code="01d" size={40} /></span>
    <div className="weather-forecast-temperature">
      <strong>22°</strong> 17°
    </div>
  </div>
  <div className="col-2">
    <h3 className="forecastDays"> Mon</h3>
    <span className="forecasticon"><WeatherIcon code="50d" size={40} /></span>
    <div className="weather-forecast-temperature">
      <strong>22°</strong> 17°
    </div>
  </div>
  <div className="col-2">
    <h3 className="forecastDays">Tue</h3>
    <span className="forecasticon"><WeatherIcon code="09d" size={40}/></span>
    <div className="weather-forecast-temperature">
      <strong>22°</strong> 17°
    </div>
  </div>
</div>
</div> );
}