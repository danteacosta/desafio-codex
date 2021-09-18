import React from 'react';
import { useHistory, useParams } from 'react-router';

import SignButtom from '../SignButton';

import './styles.css';

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }
  
    return (
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur a minima eius magmam culpa sequi explicabo.
                </p>
            </div>
            <div className="back-button-container">
                <SignButtom onClick={handleBackButtonClick} text="Voltar"/>
            </div>

        </>
    );
}
 
export default TaskDetails;