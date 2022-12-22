import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import "../../css/calendar.scss";
import "react-calendar/dist/Calendar.css";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendarColor rounded border border-dark col-12 text-center">
      <div className="">
        <div className="">
          <Calendar
            className={"calendarCenter"}
            showWeekNumbers
            onChange={onChange}
            value={date}
          />
        </div>

        {console.log(date)}

        {date.toString()}

        <div id="root"></div>
      </div>
    </div>
  );
};

export default ReactCalendar;
