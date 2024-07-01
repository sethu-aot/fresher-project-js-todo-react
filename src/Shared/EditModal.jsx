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
          <label>
            Title:
            <InputField type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </label>
          <label>
            Due Date:
            <InputField type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </label>
          <div className="button-container">
            <Button btnText={'Cancel'} onClick={closeModal} />
            <Button btnText={'Update Task'} type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
