import React from 'react';

import './Task.css'

const Task = ({ task, handleTaskClick }) => {
    return ( 
        <div className="task-container" style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <p className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </p>  
        </div>
    );
};

export default Task; 
