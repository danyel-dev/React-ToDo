import React from 'react';

import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskRemove }) => {
    return ( 
        <div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <p className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </p>  

            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => handleTaskRemove(task.id)}>X</button>
            </div>
        </div>
    );
};

export default Task; 
