import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import "../../css/common.css";

import calculatorIcon from "./HeaderImages/calculatorIcon.png";
import calendarIcon from "./HeaderImages/calendarIcon.png";
import dayPlanIcon from "./HeaderImages/dayPlanIcon.png";
import weatherIcon from "./HeaderImages/weatherIcon.png";

const calendar = () => {
  // 👇️ navigate to /contacts
  ("/calendar");
};

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menuInIndex"></div>

        <div className="row">
          <div className="mainPage">
            <div className="displayofHeaders p-2">
              <a
                href="/calculator"
                className="ChooseSite col-md-3 col-sm-6 p-4 mr-1 border border-dark rounded brightened"
              >
                <h1 className="nameParagraf text-center">
                  Wybierz: Kalkulator
                </h1>
                <img className="img-fluid" src={calculatorIcon}></img>
                <p className="descriptionOfLinks text-center">
                  {" "}
                  Kalkulator to urządzenie, które wyręczy cię od wykonywania
                  obliczeń matematycznych.
                </p>
              </a>

              <a
                href="/calendar"
                className=" ChooseSite col-md-3 col-sm-6 p-4 mr-1 border border-dark rounded brightened"
              >
                <h1 className="nameParagraf text-center">Wybierz: Kalendarz</h1>
                <img className="img-fluid" src={calendarIcon}></img>
                <p className="descriptionOfLinks text-center mt-2">
                  kalendarz pozwala przejżeć poszczególne dni i dodać do nich
                  wydarzenia.
                </p>
              </a>

              <a
                href="/dayPlan"
                className="ChooseSite col-md-3 col-sm-6 p-4 mr-1 border border-dark rounded brightened"
              >
                <h1 className="nameParagraf text-center">Wybierz: Plan dnia</h1>
                <img className="img-fluid" src={dayPlanIcon} />
                <p className="descriptionOfLinks text-center mt-2">
                  {" "}
                  to tutaj możesz ułożyć swój indywidualny i dostosowany do
                  swoich potrzeb plan dnia.
                </p>
              </a>

              <a
                href="/weather"
                className="ChooseSite col-md-3 col-sm-6 mr-1 p-4 border border-dark rounded brightened"
              >
                <h1 className="nameParagraf text-center">
                  Wybierz: Aktualna pogoda
                </h1>
                <img className="img-fluid" src={weatherIcon} />
                <p className="descriptionOfLinks text-center mt-2">
                  {" "}
                  Sprawdź aktualną pogodę panującą w dowolnym miejscu na
                  świecie.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="citation  text-right">
          {" Cytat dnia"}
          <p>cos tam cos tam</p>
        </div>
      </div>
    );
  }
}
