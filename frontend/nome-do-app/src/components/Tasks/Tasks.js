import React from 'react';

import Task from './Task';

const Taks = ({tasks, handleTaskClick, handleTaskDeletion}) => {
    return ( 
        <>
            {tasks.map((cur) => (
                <Task 
                 task={cur}
                 handleTaskClick={handleTaskClick}
                 handleTaskDeletion={handleTaskDeletion}
                  />
            ))}
        </>
    );
}
 
export default Taks;
