import React from "react";
import FormattedDate from "./FormattedDate";

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
<div className="icon">< img src={props.data.iconUrl} alt="icon image"></img></div>

<div className="row">
<div className="col-6 weather-temp">
  <img src="" className="weathericon" alt="" />
  <p></p>
  <img src="" alt="" className="mainicon" />
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
</div>);

}