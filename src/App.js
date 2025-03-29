import "./styles.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <Search />
        <h3>
          <a href="https://github.com/JemLBT/the-weather-react" target="blank">
            Take me to git hub
          </a>
        </h3>
      </div>
    </div>
  );
}
