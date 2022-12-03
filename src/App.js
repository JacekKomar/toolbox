import Calculator from "./components/calculator/Calculator";
import Calendar from "./components/calendar/Calendar";
import DayPlan from "./components/dayPlan/DayPlan";
import Weather from "./components/weather/weather";

import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="choicePage">
          <Header />
          <img src="" alt="" />

          <Switch>
            <Route path="/calculator">
              <Calculator a />
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
