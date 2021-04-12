import React,{useState} from "react";

export default function TempUnit(props){
    const [unit,setUnit] = useState("celcius");
   function convertFah(event){
       event.preventDefault();
       setUnit("Fahrenheit");
   }
   function convertCel(event){
       event.preventDefault();
       setUnit("celcius");
   }
   
    if(unit==="celcius"){
    return(
        <span className="TempUnit">
        <span className="temperature"> {Math.round(props.celcius)}</span>
        <span className="units">
        <a href="/" className="celcius"> °C | </a>{""}
          
          <a href="/" onClick={convertFah} className="fahrenheit active">  °F
          </a>
         
        </span>
        </span>
    );}
    else{
        let fahTemp= Math.round((props.celcius*9/5)+32);
        return ( <div className="TempUnit">
        <span className="temperature"> {fahTemp}</span>
        <span className="units">
          <a href="/" className="celcius active">
            °C |
          </a>{" "}
          
         {  <a href="/" onClick={convertCel} className="fahrenheit">
            °F
          </a> }
        </span>
        </div>
    );
    }
}