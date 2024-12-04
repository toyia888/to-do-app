import React from "react";

const TaskFilter = ({ setFilter }) => {
  return (
    <div className="task-filter">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default TaskFilter;
