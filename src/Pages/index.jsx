import './index.css';
import React, { useState, useEffect } from 'react';

import NavBar from "../Components/NavBar/NavBar";
import SearchBar from "../Components/SearchBar/SearchBar";
import TaskContainer from '../Components/TaskContainer/TaskContainer';
import Modal from '../Components/Modal/Modal';

function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
    setFilteredTasks(storedTasks); // Initialize filtered tasks with all tasks
  }, []);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="main-container">
      <NavBar onAddTaskClick={toggleModal} />
      <SearchBar tasks={tasks} setFilteredTasks={setFilteredTasks} />
      <TaskContainer ctnLabel="Active Tasks" tasks={filteredTasks} setTasks={setFilteredTasks} />
      <TaskContainer ctnLabel="Completed Tasks" tasks={filteredTasks} showClearButton setTasks={setFilteredTasks} />
      {isModalVisible && <Modal showModal={isModalVisible} closeModal={toggleModal} />}
    </div>
  );
}

export default Index;
