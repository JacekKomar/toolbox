import React, { useState } from "react";
import "../../css/weather.scss";
import cityIcon from "./weatherImages/cityIcon.png";
import axios from "axios";

function WeatherFromOpenMeteo() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;

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
          <h1> Weatherstack </h1>
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
          {/* {data ? <p> {data.name}</p> : null}
          {data.sys ? (
            <p>
              {"  "}
              {"("}
              {data.sys.country}
              {")"}
            </p> */}
          {/* ) : null} */}
        </h1>
      </div>

      <div className="weatherTable rounded border border-dark">
        <div className="temp">
          <h2>
            {" "}
            Temperatura:
            {data.hourly_units ? (
              <p>{data.hourly_units.temperature_2m.toFixed()} ℃</p>
            ) : null}
          </h2>
        </div>

        {/* <div className="Humdity">
          <h2>
            Wilgotność:
            {data.current_weather ? (
              <p className="bold">{data.current_weather.windspeed}%</p>
            ) : null}
          </h2>
        </div> */}

        <div className="wind">
          <h2>
            Szybkość wiatru:
            {data.hourly_units ? (
              <p className="bold">
                {data.hourly_units.windspeed_10m.toFixed()} MPH
              </p>
            ) : null}
            <img className="img-fluid" src={cityIcon}></img>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherFromOpenMeteo;
