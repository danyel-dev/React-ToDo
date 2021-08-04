import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import TasksList from './components/TasksList';
import AddTask from './components/AddTask'

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },

    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [
        ...tasks, 
        {
            title: taskTitle,
            id: uuidv4(),
            completed: false,
        }
    ];

    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) 
        return {...task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAdd={handleTaskAdd} />
        <TasksList tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />
      </div>
    </>
  );
};

export default App;
