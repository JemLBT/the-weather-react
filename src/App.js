import "./styles.css";
import React from "react";
import Search from "./Search";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <h1>Weather Search Engine</h1>
          <Search defaultCity="London" />
        </div>
      </div>
      <p>
        <a href="https://github.com/JemLBT/the-weather-react" target="blank">
          This page was coded by Jem Thomas and is open sourced on Git-Hub
        </a>
      </p>
    </div>
  );
}
