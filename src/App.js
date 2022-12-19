import Calculator from "./components/calculator/Calculator";
import Calendar from "./components/calendar/Calendar";
import DayPlan from "./components/dayPlan/DayPlan";
import Weather from "./components/weather/weather";
import "./css/Header.scss";
import Clock from "./components/Header/Clock";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Citation from "./components/Header/Citation.js";
import WeatherFromOpenWeather from "./components/weather/OpenWeather.js";
import WeatherFromIMGW from "./components/weather/IMGW.js";
import WeatherFromOpenMeteo from "./components/weather/OpenMeteo";
import WeatherFromWeatherApi from "./components/weather/WeatherApi";

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

            <div className="citation">
              {" Cytat dnia"}
              <p>cos tam cos tam</p>
            </div>
          </div>
          <Switch>
            <Route path="/calculator">
              <Calculator a />
            </Route>
            <Route path="/citation">
              <Citation />
            </Route>

            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/dayplan">
              <DayPlan />
            </Route>
            <Route path="/weather">
              <Weather />
            </Route>

            <Route path="/OpenMeteo">
              <WeatherFromOpenMeteo />
            </Route>

            <Route path="/IMGW">
              <WeatherFromIMGW />
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
