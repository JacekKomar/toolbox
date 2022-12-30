import React from "react";
import "../../css/dayPlan.scss";

import DayPlanList from "./DayPlanList";
import DayPlanForm from "./DayPlanForm";
import DayPlanToDo from "./DayPlanToDo";
import Todo from "./DayPlanToDo";

function DayPlan() {
  return (
    <div className="container">
      <div className="dayPlanTable rounded border border-dark text-center">
        <h1>Twój plan dnia:</h1>
      </div>
      <h1>
        <div className="dayPlanTable rounded border border-dark text-center mt-2 col-12">
          <div className="todo-app">
            <DayPlanList />
          </div>
        </div>
      </h1>
    </div>
  );
}

export default DayPlan;
