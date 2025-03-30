import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description} </li>
      </ul>

      <div className="row">
        <div className="col-8">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width="120px"
          />
          <span className="temperatureCity">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Pressure:</strong> {props.data.pressure}
            </li>
            <li>
              <strong>Humidity: </strong>
              {props.data.humidity} %
            </li>
            <li>
              <strong>Wind: </strong>
              {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
