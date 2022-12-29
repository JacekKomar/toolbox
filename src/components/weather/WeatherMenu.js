import React from "react";
import "../../css/weather.scss";
import { Link } from "react-router-dom";

function WeatherMenu() {
  return (
    <div className="container mb-3">
      <div className="weatherTableButNoColor rounded border border-dark mb-2 weatherButtons">
        <Link to="/OpenWeather" className="">
          <button className="col-4 weatherButton  rounded border border-dark brightenedDark">
            <h1> Open Weather </h1>
          </button>
        </Link>
        <Link to="/WeatherApi">
          <button className="col-4 weatherButton  rounded border border-dark brightenedDark">
            <h1> Weather Api </h1>
          </button>
        </Link>
        <Link to="/Weatherstack">
          <button className="col-4 weatherButton  rounded border border-dark brightenedDark">
            <h1> Weather stack </h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WeatherMenu;
