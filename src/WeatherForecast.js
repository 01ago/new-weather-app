import React,{useState} from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
  let [loaded,setLoaded]= useState(false);
  let [forecast,setForecast]= useState(null);

    function handleResponse(response){
         console.log(response.data); 
         setForecast(response.data.daily);
         setLoaded(true);
    }
   console.log(props);
    
    if(loaded){
      return(
        <span className="WeatherForecast">  
        <div className="nextdays">Next 3 days</div>
 
 <span className="nextday1"> <WeatherForecastDay data={forecast[0]}/> </span> 
 <span className="nextday2">  <WeatherForecastDay data={forecast[1]}/> </span> 
  <span className="nextday3">  <WeatherForecastDay data={forecast[2]}/></span>  
 
  </span> );
  
    } else{

      let apiKey="5e495a0f30ae782754537f5c56c584c1";
      let longitude=props.coordinates.lon;
      let latitude=props.coordinates.lat; 
      
      let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`; 
      
      
      axios.get(apiUrl).then(handleResponse);
      return null;
    
}
}