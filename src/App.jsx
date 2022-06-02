import React, { useState } from "react";
import { v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Tasks from "./Componentes/Tasks";
import AddTask from "./Componentes/AddTask";

import "./App.css";

const App = () => {  
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
    
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if ( task.id === taskId) return {  ...task, completed: !task.completed}
      
      return task;
    });
    setTasks(newTasks)

  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
    ...tasks,
    {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    },
  ]
  setTasks(newTasks)

  }
  const handleTaskDeletio = (taskId) =>{
    const newTasks = tasks.filter(task => task.id != taskId); 
    setTasks(newTasks)
  }
  
  return (
    
    <Router> 
      <div className="container">
        <header><h1>Minhas Tarefas</h1></header>

        <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDeletio={handleTaskDeletio } 
                />
      </div>
    </Router>

    

  );

};

export default App;