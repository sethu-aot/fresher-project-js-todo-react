import React, { useState, useEffect } from 'react';
import './EditModal.css'; // Create this CSS file for styling the modal
// import InputField from '../../Shared/InputField';
// import Button from '../../Shared/button'; // Ensure correct import path
import InputField from './InputField';
import Button from './button';



function EditModal({ task, updateTask, closeModal }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { ...task, title, description, dueDate };
    updateTask(updatedTask);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
            <h3>Title:</h3>
            <InputField type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          
            <h3>Description:</h3>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <h3>Due Date:</h3>
            <InputField type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          <div className="button-container">
            <Button btnText={'Update'} type="submit" />
            <Button btnText={'Cancel'} onClick={closeModal} />
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
