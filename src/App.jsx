// App.js
import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Efecto de Actualización: Muestra un mensaje cuando el estado de la lista de tareas cambia
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  
  return (
    <div className="app-container">
      <h1>LISTA DEL SUPER</h1> 
     
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
     
     </div>


  );
  
};
 
 
 
export default App;