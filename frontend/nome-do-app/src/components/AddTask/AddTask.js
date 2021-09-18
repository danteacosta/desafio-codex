import React, {useState } from 'react';

import SignButton from "../../components/SignButton";
import './AddTask.css';

const AddTask = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputData(value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData("");
    }

    return (
        <div className="add-task-container">

            <input 
            onChange={handleInputChange}
            value={inputData} 
            className="add-task-input" 
            type="text">
            </input>

            <SignButton onClick={handleAddTaskClick} text="Adicionar"/>
        </div>
    );
}
 
export default AddTask;