// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="TENGO QUE COMPRAR"
      />
      <button type="submit">Agregar</button>
    
    </form>
  );
};

export default TaskForm;
