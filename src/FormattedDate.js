import React from "react";

export default function FormattedDate(props){
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[props.date.getDay()];
let hours = props.date.getHours();
let daydate= props.date.getDate();
if(hours <10){
    hours=`0${hours}`;
}
let minutes = props.date.getMinutes();
if(minutes <10){
    minutes=`0${minutes}`;
}
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Oct",
    "Nov",
    "Dec",
  ];
let month=months[props.date.getMonth()];
    return `${daydate} ${month} , ${day} ${hours}:${minutes}  `;
}