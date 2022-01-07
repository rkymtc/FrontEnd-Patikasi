import React, { useState, useEffect } from "react";

function Footer({ updateTask, tasks }) {
  const [activeBtn, setActiveBtn] = useState("");

  useEffect(() => {
    if (activeBtn === "active") {
      updateTask(tasks.filter((task) => !task.isCompleted));
    } else if (activeBtn === "completed") {
      updateTask(tasks.filter((task) => task.isCompleted));
    }
    else if (activeBtn === "all") {
      updateTask(tasks);
    }
  }, [activeBtn]);

  const clearAll = () => {
    updateTask(tasks.filter((todo) => todo.isCompleted !== true));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {tasks.filter((task) => task.isCompleted !== true).length}
        </strong>{" "}
        items left
      </span>

      <ul className="filters">
        <li>
          <a
            className={activeBtn === "all" ? "selected" : ""}
            onClick={() => setActiveBtn("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={activeBtn === "active" ? "selected" : ""}
            onClick={() => setActiveBtn("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={activeBtn === "completed" ? "selected" : ""}
            onClick={() => setActiveBtn("completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      {tasks.some((task) => task.isCompleted) && (
        <button className="clear-completed" onClick={clearAll}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;