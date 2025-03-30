import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
  }

  const apiKey = "10588b3do607b336f1e63a30b7f6ft4a";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}&units=metric`;
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>

        <h2>{message}</h2>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy </li>
        </ul>

        <div className="row">
          <div className="col-8">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
              width="120px"
            />
            <span className="temperatureCity">6</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-4">
            <ul>
              <li>
                <strong>Precipitation:</strong> 15%
              </li>
              <li>
                <strong>Humidity: </strong>72%
              </li>
              <li>
                <strong>Wind:</strong> 15 km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
