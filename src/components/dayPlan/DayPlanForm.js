import React, { useState, useEffect, useRef } from "react";
import "../../css/dayPlan.scss";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input text-center col-12 mt-2 mb-2 rounded border border-dark"
          />
          <button
            onClick={handleSubmit}
            className="btn btn-warning col-12 border border-dark"
          >
            <h3> Zamień </h3>
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Wpisz swoje zadanie"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input mb-3 mr-2  rounded border border-dark text-center"
            ref={inputRef}
          />
          <button
            onClick={handleSubmit}
            className="btn btn-success mb-2 border border-dark"
          >
            <h3>Dodaj swoje zadania</h3>
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
