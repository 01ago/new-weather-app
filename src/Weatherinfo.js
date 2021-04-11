import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempUnit from "./TempUnit";
import WeatherForecast from "./WeatherForecast";

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
<div className="main-icon">
<WeatherIcon code={props.data.icon} size={60} /></div>

<div className="row">
<div className="col-6 weather-temp">
 
  <p></p>
 <TempUnit celcius={props.data.temperature} />
 
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
<WeatherForecast />;
</div>
</div>);

}