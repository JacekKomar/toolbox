import React, { useState } from "react";
import "../../css/weather.scss";
import cityIcon from "./weatherImages/cityIcon.png";
import axios from "axios";
import WeatherMenu from "./WeatherMenu";

function WeatherFromWeatherApi() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.weatherapi.com/v1/current.json?key=f615d211edcf4471839172333221912&q=${location}&aqi=no`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="container mb-5">
      <WeatherMenu />
      <h1>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder=" Wpisz nazwę miejscowości"
          type="text"
          className="weatherTable rounded border border-dark col-12"
        ></input>
      </h1>
      <div className="weatherTable rounded border border-dark mb-2 ">
        <h1>
          <div className="nameAndCountryWeather">
            <p> Aktualna pogoda dla:</p>
            {data.location ? <p> {data.location.name}</p> : null}
            {data.location ? (
              <p>
                {"  "}
                {"("}
                {data.location.country}
                {")"}
              </p>
            ) : null}
          </div>
        </h1>
      </div>

      <div className="weatherTable rounded border border-dark">
        <div className="temp">
          <h2>
            {" "}
            Temperatura w °C:
            {data.current ? <p>{data.current.temp_c.toFixed()} °C</p> : null}
          </h2>
        </div>

        <h2>
          {" "}
          Temperatura w °F:{" "}
          {data.current ? <p>{data.current.temp_f} °F</p> : null}
        </h2>

        <div className="Humdity">
          <h2>
            Wilgotność:
            {data.current ? (
              <p className="bold">{data.current.humidity}%</p>
            ) : null}
          </h2>
        </div>

        <div className="wind">
          <h2>
            Szybkość wiatru:
            {data.current ? (
              <p className="bold">{data.current.wind_mph.toFixed()} MPH</p>
            ) : null}
            <img className="img-fluid" src={cityIcon}></img>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherFromWeatherApi;
