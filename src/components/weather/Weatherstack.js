import React, { useState } from "react";
import "../../css/weather.scss";
import cityIcon from "./weatherImages/cityIcon.png";
import axios from "axios";

function Weatherstack() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `http://api.weatherstack.com/current?access_key=cf43e74439b1c045ae9059aa7dbea426&query=${location}`;

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
      <div className="weatherTableButNoColor rounded border border-dark mb-2 weatherButtons">
        <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
          <h1> OpenWeather </h1>
        </button>
        <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
          <h1> Weather Api </h1>
        </button>
        <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
          <h1> Weatherstack</h1>
        </button>
        <button className="col-3 weatherButton  rounded border border-dark brightenedDark">
          <h1> Open Meteo </h1>
        </button>
      </div>

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
      <div className="weatherTable rounded border border-dark mb-2">
        <h1 className="nameAndCountryWeather">
          Aktualna pogoda dla:
          {data.location ? <p> {data.location.name}</p> : null}
          {data.location ? (
            <p>
              {"  "}
              {"("}
              {data.location.country}
              {")"}
            </p>
          ) : null}
        </h1>
      </div>

      <div className="weatherTable rounded border border-dark">
        <div className="temp">
          <h2>
            {" "}
            Temperatura:
            {data.current ? (
              <p>{data.current.temperature.toFixed()} ℃</p>
            ) : null}
          </h2>
        </div>

        <h2>
          {" "}
          Odczuwalna temperatura:{" "}
          {data.current ? <p>{data.current.feelslike} ℃</p> : null}
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
              <p className="bold">{data.current.wind_speed.toFixed()} KPH</p>
            ) : null}
            <img className="img-fluid" src={cityIcon}></img>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Weatherstack;
