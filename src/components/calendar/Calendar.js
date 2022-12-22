import React from "react";
import "../../css/calendar.scss";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";

export default class MyCalendar extends React.Component {
  render() {
    return (
      <div className="container ">
        <Link to="/CalendarAllContent">
          <button>
            <div className="calendarTable rounded border border-dark text-center">
              <h1>Twój kalendarz: </h1>
            </div>
          </button>
        </Link>

        <div className="calendarTable rounded border border-dark mt-2">
          cała tabela
        </div>
      </div>
    );
  }
}
