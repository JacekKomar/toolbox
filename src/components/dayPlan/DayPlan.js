import React from "react";
import "../../css/dayPlan.scss";
import TodayChallenge from "./TodayChallenge";

import DayPlanList from "./DayPlanList";
import DayPlanForm from "./DayPlanForm";
import DayPlanToDo from "./DayPlanToDo";
import Todo from "./DayPlanToDo";

function DayPlan() {
  return (
    <div className="container">
      <div className="dayPlanTable rounded border border-dark text-center">
        <h3>Twój plan dnia:</h3>
      </div>
      <h1>
        <div>
          <DayPlanList />
        </div>
        <div className="dayPlanTable rounded border border-dark text-center mb-5 mt-2">
          {" "}
          Wyzwanie codzienne:
          <TodayChallenge />
        </div>
      </h1>
    </div>
  );
}

export default DayPlan;
