import React, { useState } from "react";
import "../../css/calendar.scss";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import "react-calendar/dist/Calendar.css";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="container">
      <div className="CalendarTable rounded border border-dark text-center mb-2 mt-2">
        <h1>Twój Kalendarz:</h1>
      </div>

      <div className="calendarColor rounded border border-dark col-12 text-center mb-4">
        <div className="">
          <div className="">
            <Calendar
              className={"calendarCenter mt-3 mb-3"}
              showWeekNumbers
              onChange={onChange}
              value={date}
            />
          </div>

          {console.log(date)}

          {date.toString()}
          <div className="mb-4">
            <div id="root"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCalendar;
