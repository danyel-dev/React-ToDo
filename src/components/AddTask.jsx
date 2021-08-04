import React from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({ handleTaskAdd }) => {

    const handleAddTaskClick = () => {
        const TaskTitle = document.getElementById('inputTask')
        handleTaskAdd(TaskTitle.value)
        TaskTitle.value = ""
    };

    return (
        <div className='add-task-container'>
            <input
                className='add-task-input'
                type="text"
                id="inputTask" 
            />

            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask;
