import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  addTask,
  toggleTaskCompletion,
  deleteTask,
  editTask,
}) => {
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
