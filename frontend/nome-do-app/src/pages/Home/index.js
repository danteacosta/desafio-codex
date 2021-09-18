import React, {useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

import AddTask from '../../components/AddTask/AddTask';
import Tasks from '../../components/Tasks/Tasks';

import './styles.css';

const Home = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: "Estudar Programação",
      completed: false
    }
  ]);

  useEffect(() => {
    const fetchTasks = async() => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data);
    };
    fetchTasks();
  }, [])
  

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return {... task, completed: !task.completed}

      return task;
    });
    setTasks(newTask);
  };


  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter((task) => task.id != taskId);
    setTasks(newTask);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }];

    setTasks(newTask);
  }

  return (
    <>
      <div className="container">
          <h1>Meus projetos</h1>
          <AddTask handleTaskAddition={handleTaskAddition} />
          <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
          />
      </div>
    </>
  );
}
 
export default Home;