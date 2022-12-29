import React, { useState } from "react";
import "../../css/weather.scss";
import cityIcon from "./weatherImages/cityIcon.png";
import axios from "axios";
import WeatherMenu from "./WeatherMenu";

function WeatherFromOpenWeather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`;

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
      <div className="weatherTable rounded border border-dark mb-2">
        <h1 className="">
          <div className="nameAndCountryWeather">
            <p> Aktualna pogoda dla: </p>
            {data ? <p> {data.name}</p> : null}
            {data.sys ? (
              <p>
                {"  "}
                {"("}
                {data.sys.country}
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
            Temperatura:
            {data.main ? <p>{data.main.temp.toFixed()} ℃</p> : null}
          </h2>
        </div>

        <h2>
          {" "}
          Odczuwalna temperatura:{" "}
          {data.main ? <p>{data.main.feels_like} ℃</p> : null}
        </h2>

        <div className="Humdity">
          <h2>
            Wilgotność:
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          </h2>
        </div>

        <div className="wind">
          <h2>
            Szybkość wiatru:
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed()} MPH</p>
            ) : null}
            <img className="img-fluid" src={cityIcon}></img>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default WeatherFromOpenWeather;
