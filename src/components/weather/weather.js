import React, { useState } from "react";
import "../../css/weather.scss";
import cityIcon from "./weatherImages/cityIcon.png";
import axios from "axios";

export default function Weather() {
  const [mojText, ustawText] = React.useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  return (
    <div className="container mb-5">
      <p>Podaj nazwę miejscowości:</p>

      <h1>
        <input
          className="weatherTable rounded border border-dark col-12"
          type="text"
          onChange={(event) => ustawText(event.target.value)}
        ></input>
      </h1>

      <div className="weatherTable rounded border border-dark">
        <h1>
          <div> {mojText} c </div>
        </h1>
        <img className="img-fluid" src={cityIcon}></img>
      </div>
    </div>
  );
}
