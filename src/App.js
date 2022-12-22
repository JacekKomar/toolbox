import Calculator from "./components/calculator/Calculator";
import MyCalendar from "./components/calendar/Calendar";
import DayPlan from "./components/dayPlan/DayPlan";
import Weather from "./components/weather/weather";
import "./css/Header.scss";
import Clock from "./components/Header/Clock";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { quotes, AppCitation } from "./components/Header/Citation";

import WeatherFromOpenWeather from "./components/weather/OpenWeather.js";
import Weatherstack from "./components/weather/Weatherstack.js";
import WeatherFromWeatherApi from "./components/weather/WeatherApi";

// const el = document.querySelector("#citation");
// el.innerHTML =

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="choicePage">
          <Header />
          <img src="" alt="" />
          <div className="ClockAndCitation">
            <div className="App">
              <Clock></Clock>
            </div>

            <div id="Citation" className="Citation">
              <p></p>
            </div>
          </div>
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            {/* <Route path="/citation">
              <Citation /> */}
            {/* </Route> */}

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
      </div>
    </div>
  );
}

export default App;
