import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from 'react-router';

import './Task.css';

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {

    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div 
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse"}: {borderLeft: "6px solid red"}} 
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button  onClick={handleTaskDetailsClick} className="see-task">
                    <CgInfo />
                </button>
                <button onClick={() => handleTaskDeletion(task.id)} className="remove-task">
                    <CgClose />
                </button>
            </div>
        </div>
    );
}
 
export default Task;