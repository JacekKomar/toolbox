import React from "react";
import "../../css/weather.scss";
import { Link } from "react-router-dom";

function Weather() {
  return (
    <div className="container mb-5">
      <div className="weatherTableButNoColor rounded border border-dark mb-2 weatherButtons">
        <Link to="/OpenWeather" className="">
          <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
            <h1> OpenWeather </h1>
          </button>
        </Link>
        <Link to="/WeatherApi">
          <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
            <h1> Weather Api </h1>
          </button>
        </Link>
        <Link to="/IMGW">
          <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
            <h1> IMGW </h1>
          </button>
        </Link>
        <Link to="/OpenMeteo">
          <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
            <h1> Open Meteo </h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Weather;
