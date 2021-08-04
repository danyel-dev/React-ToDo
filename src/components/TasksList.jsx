import React from 'react';

import Task from './Task'

const TasksList = ({ tasks, handleTaskClick }) => {
    return (
        <div>
            {tasks.map(task => <Task task={task} handleTaskClick={handleTaskClick} />)}
        </div>
    );
};

export default TasksList;
