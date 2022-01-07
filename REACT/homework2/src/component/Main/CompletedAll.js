import React from 'react'


function CompletedAll({ updateTask, tasks }) {
  const completedAll = () => {
    const taskList = tasks.map((task) => ({
      ...task,
      isCompleted: !task.isCompleted,
    }));
    updateTask(taskList);
  };
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={tasks.every((task) => task.isCompleted)}
      />
      {tasks.length ? (
        <label htmlFor="toggle-all" onClick={completedAll}>
          Mark all as complete
        </label>
      ) : null}
    </section>
  )
}

export default CompletedAll
