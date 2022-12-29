import React from "react";
import "../../css/dayPlan.scss";
import DayPlanForm from "./DayPlanForm";

export default function DayPlan() {
  return (
    <div className="container">
      <div className="dayPlanTable rounded border border-dark text-center">
        <h1>Twój plan dnia:</h1>
      </div>
      <h1>
        <div className="dayPlanTable rounded border border-dark text-center mt-2 col-12">
          <DayPlanForm />
        </div>
      </h1>
    </div>
  );
}
