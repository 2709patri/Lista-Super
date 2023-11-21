// TaskItem.js
import React, { useState } from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const [isCompleted, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(!isCompleted);
    onComplete(task.id);
  };

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <button onClick={handleComplete}>{isCompleted ? 'Desmarcar' : 'Completar'}</button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

export default TaskItem;