import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import "../../css/common.css";
// import HeaderHead from "./components/Header/HeaderHead";

import calculatorIcon from "./HeaderImages/calculatorIcon.png";
import calendarIcon from "./HeaderImages/calendarIcon.png";
import dayPlanIcon from "./HeaderImages/dayPlanIcon.png";
import weatherIcon from "./HeaderImages/weatherIcon.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menuInIndex"></div>

        <div className="row">
          <div className="mainPage">
            <div className="displayofHeaders p-2">
              <div className="ChooseSite col-3 p-4 mr-1 border border-dark rounded brightened">
                <h1 className="nameParagraf text-center">
                  Wybierz: Kalkulator
                </h1>
                <img className="img-fluid" src={calculatorIcon}></img>
                <p className="descriptionOfLinks text-center">
                  {" "}
                  Kalkulator to urządzenie, które wyręczy cię od wykonywania
                  obliczeń matematycznych.
                </p>

                <Link to="./components/calculator/calculator">Kalkulator</Link>
              </div>

              <div className="ChooseSite col-3 p-4 mr-1 border border-dark rounded brightened">
                <h1 className="nameParagraf text-center">Wybierz: Kalendaż</h1>
                <img className="img-fluid" src={calendarIcon}></img>
                <p className="descriptionOfLinks text-center">
                  kalendaż pozwala przejżeć poszczególne dni i dodać do nich
                  wydarzenia.
                </p>

                <Link to="/calendar ">Kalendaż</Link>
              </div>

              <div className="ChooseSite col-3 p-4 mr-1 border border-dark rounded brightened">
                <h1 className="nameParagraf text-center">Wybierz: Plan dnia</h1>
                <img className="img-fluid" src={dayPlanIcon} />
                <p className="descriptionOfLinks text-center">
                  {" "}
                  to tutaj możesz ułożyć swój indywidualny i dostosowany do
                  swoich potrzeb plan dnia.
                </p>

                <Link to="/planDay">Plan dnia</Link>
              </div>

              <div className="ChooseSite col-3 mr-1 p-4 border border-dark rounded brightened">
                <h1 className="nameParagraf text-center">
                  Wybierz: Aktualna pogoda
                </h1>
                <img className="img-fluid" src={weatherIcon} />
                <p className="descriptionOfLinks text-center">
                  {" "}
                  Sprawdź aktualną pogodę panującą w dowolnym miejscu na
                  świecie.
                </p>

                <Link to="/planDay"></Link>
              </div>
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
