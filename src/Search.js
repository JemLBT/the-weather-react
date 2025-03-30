import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Search() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city" />
        <input type="submit" value="Search" />
      </form>

      <h2>New York</h2>
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
  );
}
