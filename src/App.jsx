import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TasksList from './components/TasksList';
import AddTask from './components/AddTask'
import Header from './components/Header';
import TaskDetail from './components/TaskDetail';

import './App.css';
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    }

    fetchTask();
  }, []);

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
    <Router>
      <div className="container">
        <Header />
        <Route 
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAdd={handleTaskAdd} />
              <TasksList 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskRemove={handleTaskRemove} 
              />
            </>
          )}
        />
        
        <Route path="/:taskTitle" exact component={TaskDetail} />
      </div>
    </ Router>
  );
};

export default App;
