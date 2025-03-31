import React, { useState } from "react";

import axios from "axios";
import "./styles.css";

export default function Search(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      date: new Date(response.data.time * 1000),
    });

    setReady(true);
  }

  function search() {
    const apiKey = "10588b3do607b336f1e63a30b7f6ft4a";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "app is loading...";
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div>
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
