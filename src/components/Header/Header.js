import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

import calculatorIcon from "./HeaderImages/calculatorIcon.png";
import calendarIcon from "./HeaderImages/calendarIcon.png";
import dayPlanIcon from "./HeaderImages/dayPlanIcon.png";
export default class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="menuInIndex"></div>

        <div className="row">
          <div className="mainPage">
            <div className="displayofHeaders col-9">
              <div className="ChooseSite">
                <h1 className="nameParagraf">Wybierz: Kalkulator</h1>
                <img src={calculatorIcon}></img>
                <p className="descriptionOfLinks"> Kalkulator</p>

                <Link to="/calculator">Kalkulator</Link>
              </div>

              <div className="ChooseSite">
                <h1 className="nameParagraf">Wybierz: Kalendaż</h1>
                <img src={calendarIcon}></img>
                <p className="descriptionOfLinks"> kalendaż</p>

                <Link to="/calendar">Kalendaż</Link>
              </div>

              <div className="ChooseSite">
                <h1 className="nameParagraf">Wybierz: Stwórz plan dnia</h1>
                <img src={dayPlanIcon} />
                <p className="descriptionOfLinks"> Plan dnia</p>

                <Link to="/planDay">Plan dnia</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="citation col-3 text-right">
          {" Cytat dnia"}
          <p>cos tam cos tam</p>
        </div>
      </div>
    );
  }
}
