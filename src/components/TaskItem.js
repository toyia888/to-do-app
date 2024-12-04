import React, { useState } from "react";

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSubmit = () => {
    if (editText.trim()) {
      editTask(task.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEditSubmit}>Save</button>
        </>
      ) : (
        <div className="task-item-container">
          <span onClick={() => toggleTaskCompletion(task.id)}>
            {task.text}
          </span>
          <button className="task-button" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
