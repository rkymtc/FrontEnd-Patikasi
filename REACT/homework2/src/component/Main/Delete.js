import React from "react";

function DeleteTask({ updateTask, tasks }) {

  const onChangeTask = (id) => {
    const taskList = tasks.map((task) =>
      tasks.indexOf(task) === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    );
    updateTask(taskList);
  };

  const deleteTask = (id) => {
    const taskList = tasks.filter((task) => tasks.indexOf(task) !== id);

    updateTask(taskList);
  };


  return (
    <section className="main">

      <ul className="todo-list">
        {tasks.map((task, i) => (
          <li key={i} className={task.isCompleted ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => onChangeTask(i)}
                checked={task.isCompleted}
              />
              <label>{task.text}</label>
              <button
                className="destroy"
                onClick={() => deleteTask(i)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DeleteTask;