import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetail.css';

const TaskDetail = () => {
    const params = useParams();
    
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <> 
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>

            <div className="task-detail-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsa magnam, officiis inventore perspiciatis expedita voluptatum. Quae, nobis suscipit fuga assumenda rerum labore aut. Illum pariatur quae porro assumenda repellat.</p>
            </div>
        </>
    );
}

export default TaskDetail;
