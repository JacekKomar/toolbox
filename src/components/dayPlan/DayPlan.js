import React from "react";
import "../../css/dayPlan.scss";
// to jest komponent funkcyjny, czyli że zamiast nazwy klasy robimy funkcję
export default function DayPlan() {
  const [mojText, ustawText] = React.useState(""); // to jest Hook useState
  console.log(mojText);
  return (
    <div className="container">
      <div className="dayPlanTable rounded border border-dark text-center">
        <h1>Twój plan dnia:</h1>
      </div>
      <h1>
        <input
          type="text"
          onChange={(event) => ustawText(event.target.value)}
          className="dayPlanTable rounded border border-dark text-center mt-2 col-12"
          placeholder="  Wpisz nazwę czynności:"
        ></input>
      </h1>
      <div className="dayPlanTable rounded border border-dark mt-2 text-center">
        <div>{mojText}</div>
      </div>
    </div>
  );
}
