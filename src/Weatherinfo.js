import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props) {
return ( 
<div className="Weatherinfo">
   <span className="cityspan">
<h1 className="city">{props.data.city}</h1>{" "}
</span>
<span className="countryspan">
<h1 className="country">{props.data.country} </h1>
</span>

<div className="date"> <FormattedDate date={props.data.date}/></div>

<WeatherIcon code={props.data.icon} />

<div className="row">
<div className="col-6 weather-temp">
 
  <p></p>
 
  <span className="temperature"> {props.data.temperature}</span>
  <span className="units">
    <a href="/" className="celcius active">
      °C |
    </a>{" "}
    
    <a href="/" className="fahrenheit">
      °F
    </a>
  </span>
  <p className="feelslike">
    Feels like: {props.data.feelsLike}°{" "}
    <span className="feels"> </span>
  </p>
</div>
<span className="humidp">
  {" "}
  Humidity: {props.data.humidity} <span className="humid"> </span> %{" "}
</span>
<span className="windp">
  {" "}
  Wind: {props.data.wind}
  <span className="wind"></span> Km/h{" "}
</span>
<div className="nextdays">Next 3 days</div>
<div className="row weather-forecast">
  <div className="col-2">
    <h3> Sun</h3>
    <span className="forecasticon"><WeatherIcon code={props.data.icon} /></span>
    <div className="weather-forecast-temperature">
      <strong>22°</strong> 17°
    </div>
  </div>
  <div className="col-2">
    <h3> Mon</h3>
    <span className="forecasticon"><WeatherIcon code={props.data.icon} /></span>
    <div className="weather-forecast-temperature">
      <strong>22°</strong> 17°
    </div>
  </div>
  <div className="col-2">
    <h3>Tue</h3>
    <span className="forecasticon"><WeatherIcon code={props.data.icon} /></span>
    <div className="weather-forecast-temperature">
      <strong>22°</strong> 17°
    </div>
  </div>
</div>
</div>
</div>);

}