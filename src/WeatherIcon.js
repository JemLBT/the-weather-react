import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon_Url(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="BLUE"
      size={64}
      animate={true}
    />
  );
}
