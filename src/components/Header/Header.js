import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.scss";
import "../../css/common.scss";

import calculatorIcon from "./HeaderImages/calculatorIcon.png";
import calendarIcon from "./HeaderImages/calendarIcon.png";
import dayPlanIcon from "./HeaderImages/dayPlanIcon.png";
import weatherIcon from "./HeaderImages/weatherIcon.png";

export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="displayofHeaders p-2 ">
            <div className="ChooseSite col-sm p-4 mr-1 border border-dark rounded brightened">
              <Link to="/calculator" className=" ChooseSite">
                <h1 className="nameParagraf text-center">
                  Wybierz: Kalkulator
                </h1>
                <img className="img-fluid" src={calculatorIcon}></img>
                <p className="descriptionOfLinks text-center">
                  {" "}
                  Kalkulator to urządzenie, które wyręczy cię od wykonywania
                  obliczeń matematycznych.
                </p>
              </Link>
            </div>

            <div className=" ChooseSite col-sm p-4 mr-1 border border-dark rounded brightened">
              <Link to="/calendar" className=" ChooseSite ">
                <h1 className="nameParagraf text-center">Wybierz: Kalendarz</h1>
                <img className="img-fluid" src={calendarIcon}></img>
                <p className="descriptionOfLinks text-center mt-2">
                  kalendarz pozwala przejżeć poszczególne dni i dodać do nich
                  wydarzenia.
                </p>
              </Link>
            </div>

            <div className="ChooseSite col-sm p-4 mr-1 border border-dark rounded brightened">
              <Link to="/dayPlan" className="ChooseSite">
                <h1 className="nameParagraf text-center">Wybierz: Plan dnia</h1>
                <img className="img-fluid" src={dayPlanIcon} />
                <p className="descriptionOfLinks text-center mt-2">
                  {" "}
                  to tutaj możesz ułożyć swój indywidualny i dostosowany do
                  swoich potrzeb plan dnia.
                </p>
              </Link>
            </div>

            <div className="ChooseSite col-sm mr-1 p-4 border border-dark rounded brightened">
              <Link to="/weather" className="ChooseSite ">
                <h1 className="nameParagraf text-center">
                  Wybierz: Aktualna pogoda
                </h1>
                <img className="img-fluid" src={weatherIcon} />
                <p className="descriptionOfLinks text-center mt-2">
                  {" "}
                  Sprawdź aktualną pogodę panującą w dowolnym miejscu na
                  świecie.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
