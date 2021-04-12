import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let maxTemp= Math.round(props.data.temp.max);
        return`${maxTemp}°`
    }
    function minTemperature(){
        let minTemp= Math.round(props.data.temp.min);
        return`${minTemp}°`
    }

    function day(){
let date=new Date (props.data.dt*1000);
let day= date.getDay();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


return days[day];

    }
return(
    <span className="WaetherForecastDay">
    <span className="col-2"> 
   <span> <h3 className="forecastDays"> {day()}</h3></span>
    <span className="forecasticon"><WeatherIcon code={props.data.weather[0].icon} size={40} /></span>
   {/*  <div className="weather-forecast-temperature"> */}
      <strong className="forecastTemp">{maxTemperature()} {minTemperature()}</strong>
    {/*   </div> */}
      </span>
  </span>
  /*  <div className="col-2">
    <h3 className="forecastDays"> {day()}</h3>
    <span className="forecasticon"><WeatherIcon code={props.data.weather[0].icon} size={40} /></span>
    <div className="weather-forecast-temperature">
      <strong>{maxTemperature()}</strong> {minTemperature()}
    </div>
  </div>
  <div className="col-2">
    <h3 className="forecastDays">{day()}</h3>
    <span className="forecasticon"><WeatherIcon code={props.data.weather[0].icon} size={40}/></span>
    <div className="weather-forecast-temperature">
      <strong>{maxTemperature()}</strong> {minTemperature()}
    </div>
  </div>  */

);
}