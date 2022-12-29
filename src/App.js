import Calculator from "./components/calculator/Calculator";
import MyCalendar from "./components/calendar/Calendar";
import DayPlan from "./components/dayPlan/DayPlan";
import Weather from "./components/weather/weather";
import "./css/Header.scss";
import Clock from "./components/Header/Clock";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Citation from "./components/Header/Citation";

import WeatherFromOpenWeather from "./components/weather/OpenWeather.js";
import Weatherstack from "./components/weather/Weatherstack.js";
import WeatherFromWeatherApi from "./components/weather/WeatherApi";

import { RenderingCitation, CitationApp } from "./components/Header/Citation";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="choicePage">
          <Header />
          <img src="" alt="" />
          <div className="ClockAndCitation">
            <div className="App col-6">
              <Clock></Clock>
            </div>

            <div id="Citation" className="Citation col-6">
              <div id="CitatDiv" className="CitatDiv mt-3">
                <Citation />
              </div>

              <p></p>
            </div>
          </div>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>

            <Route path="/Citation">
              <Citation />
            </Route>

            <Route path="/calendar">
              <MyCalendar />
            </Route>

            <Route path="/dayplan">
              <DayPlan />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>

            <Route path="/Weatherstack">
              <Weatherstack />
            </Route>

            <Route path="/OpenWeather">
              <WeatherFromOpenWeather />
            </Route>

            <Route path="/WeatherApi">
              <WeatherFromWeatherApi />
            </Route>

            <Route path="/">
              <h1>Witaj podróżniku!</h1>
            </Route>
          </Switch>
        </div>
        {/* <div>{JSON.stringify(quoteShow)}</div> */}
      </div>
    </div>
  );
}

export default App;
