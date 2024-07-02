import React, { useState } from 'react';
import InputField from '../../Shared/InputField';
import './Modal.css';
import Button from '../../Shared/button';
import closeButton from './x.svg';

function Modal({ showModal, closeModal }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = () => {
    // Construct task object
    const task = {
      id: new Date().getTime(), 
      title: taskTitle,
      description: taskDescription,
      dueDate: dueDate,
      completed: false,
    };

    // Save task to local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear form fields
    setTaskTitle('');
    setTaskDescription('');
    setDueDate('');

    // Close modal after submission
    closeModal();
  };

  return (
    showModal && (
      <div className='modal-container'>
        <div className="modalHeader">
          {/* <button className="close-button" onClick={closeModal}>X</button> */}
          <img src={closeButton} onClick={closeModal} alt="close button" />
          <h2>Add Task</h2>
        </div>

        <div className="modalContent">

          <h3>Title</h3>
          <InputField className={"searchbar"} id={"search"} placeholder={"eg: Create two ad banners"} value={taskTitle} onChange={handleTitleChange}/>
          <h3>Description</h3>
          <textarea id="description" placeholder='Add your task description' value={taskDescription} onChange={handleDescriptionChange}></textarea>
          <h3>Due Date</h3>
          <input type="date" id="date" value={dueDate} onChange={handleDateChange}/>
        </div>
        <div className="button-container">
          <Button btnText={'Submit'} onClick={handleSubmit} />
          <Button className="cancelButton" btnText={'Cancel'} onClick={closeModal} />
          
        </div>
      </div>
    )
  );
}

export default Modal;
