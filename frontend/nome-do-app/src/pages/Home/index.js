import React, {useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

import AddTask from '../../components/AddTask/AddTask';
import Tasks from '../../components/Tasks/Tasks';

import './styles.css';

const Home = (props) => {

  // Exemplo de projetos fictícios cadastrados no sistema
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      title: "Fazenda Feliz",
      completed: false
    },
    {
      id: uuidv4(),
      title: "Orkut 2.0",
      completed: true
    },
    {
      id: uuidv4(),
      title: "Pizzaria Codemix",
      completed: true
    }
    
  ]);

  useEffect(() => {
    const fetchTasks = async() => {
      // Consome uma api para simular os projetos do sistema
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      const getTasks = [...tasks, ...data]
      setTasks(getTasks);
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

  const handleProfileDetails = () => {
    props.history.push("/profile");
  } 

  return (
    <>
      <button onClick={handleProfileDetails}>Visualizar meu perfil</button>
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