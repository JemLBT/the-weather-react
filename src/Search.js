import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  const [ready, setReady] = useState(false);
  let apiKey = "842b36d55cb28eba74a018029d56b04c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}units=metric`;
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />{" "}
            </div>
            <div className="col-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <h1>New York</h1>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="weather icon"
            />{" "}
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 15 km/h</li>
            </ul>
          </div>
        </div>{" "}
      </div>

      <h2>{message}</h2>
    </div>
  );
}
