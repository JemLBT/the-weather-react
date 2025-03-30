import React, { useState } from "react";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`The temperature in ${city} is 10°C`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <h1>New York</h1>
            <ul>
              <li>Wednesday 07:00</li>
              <li>Mostly Cloudy </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          />
          6°C
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
