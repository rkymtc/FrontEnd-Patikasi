import React, { useState, useEffect } from "react";

function Form({ addTask, tasks }) {
  const [todo, setTodo] = useState({ text: "", isCompleted: false });

  useEffect(() => {
    setTodo({ text: "" });
  }, [tasks]);

  const onChangeInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (todo.text === "") {
      return false;
    }

    addTask([...tasks, todo]);
  };
  
  return(
  <form onSubmit={onSubmit}>
        <input
          name="text"
          type="text"
          className="new-todo"
          value={todo.text}
          onChange={onChangeInput}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
  )
}
export default Form