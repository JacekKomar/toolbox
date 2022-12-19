import React from "react";
import "../../css/calendar.scss";
export default class Calendar extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="calendarTable rounded border border-dark text-center">
          <h1>Twój kalendarz: </h1>
        </div>
        <div className="calendarTable rounded border border-dark mt-2">
          cała tabela
        </div>
      </div>
    );
  }
}