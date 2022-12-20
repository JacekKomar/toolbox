import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="">
      <div>
        <Calendar onChange={onChange} value={date} />
      </div>

      <div id="root"></div>
    </div>
  );
  render(<ReactCalendar />, document.getElementById("#root"));
};

export default ReactCalendar;
