import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      date: "Sunday 30th March 2025",
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div>
        <div className="Weather">
          <form>
            <input type="search" placeholder="Enter a city" />
            <input type="submit" value="Search" />
          </form>

          <h2>{weatherData.city}</h2>
          <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description} </li>
          </ul>

          <div className="row">
            <div className="col-8">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width="120px"
              />
              <span className="temperatureCity">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <strong>Pressure:</strong> {weatherData.pressure}
                </li>
                <li>
                  <strong>Humidity: </strong>
                  {weatherData.humidity} %
                </li>
                <li>
                  <strong>Wind: </strong>
                  {Math.round(weatherData.wind)} km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "10588b3do607b336f1e63a30b7f6ft4a";
    let city = "New York";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "app is loading...";
  }
}
