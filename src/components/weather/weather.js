import React from "react";
import "../../css/weather.scss";
import cityIcon from "./weatherImages/cityIcon.png";

export default function Weather() {
  const [mojText, ustawText] = React.useState("");

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
