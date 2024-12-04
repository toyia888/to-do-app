import React, { useState } from "react";
import TaskList from "./components/TasklIst"
import TaskFilter from "./components/TaskFilter";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      { id: Date.now(), text: taskText, completed: false },
    ]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : tasks.filter((task) =>
          filter === "active" ? !task.completed : task.completed
        );

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskFilter setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        addTask={addTask}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
