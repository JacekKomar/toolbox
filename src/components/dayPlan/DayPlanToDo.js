import React, { useState } from "react";
import TodoForm from "./DayPlanForm";
import TodoList from "./DayPlanList";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import "../../css/dayPlan.scss";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return (
      <div>
        <TodoForm edit={edit} onSubmit={submitUpdate} />{" "}
      </div>
    );
  }

  return todos.map((todo, index) => (
    <div className="mb-4 mt-3 dayPlanTable rounded border border-dark text-center mr-3 ml-3">
      <div className={todo.isComplete ? "todo-row" : "todo-row"} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>

        <div>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
        </div>
      </div>
    </div>
  ));
};

export default Todo;
