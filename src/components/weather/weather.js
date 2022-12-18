import React, { useState } from "react";
import "../../css/weather.scss";
import cityIcon from "./weatherImages/cityIcon.png";
import axios from "axios";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

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

      <div className="weatherTable rounded border border-dark">
        <div className="temp">
          {" "}
          Temperatura:
          {data.main ? <h1>{data.main.temp.toFixed()}</h1> : null}
        </div>

        <h1>
          {" "}
          Odczuwalna temperatura:{" "}
          {data.main ? <p>{data.main.feels_like} c</p> : null}{" "}
        </h1>

        <div className="feelsLike">
          {/* <h1> {data.main.temp} pizdzi </h1>{" "} */}
        </div>

        <div className="Humdity">
          <p> Wilgotność:</p>
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
        </div>
        <div className="wind">Szybkość wiatru:</div>
        {data.wind ? (
          <p className="bold">{data.wind.speed.toFixed()} MPH</p>
        ) : null}
        <img className="img-fluid" src={cityIcon}></img>
      </div>
    </div>
  );
}

export default Weather;
