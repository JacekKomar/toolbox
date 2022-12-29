import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Dodaj do zrobienia"
        value={input}
        name="text"
        className="todo-input"
      ></input>

      <button className="todo-button">Dodaj do zrobienia</button>
    </form>
  );
}

export default TodoForm;
