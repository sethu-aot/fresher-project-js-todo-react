import React, { useState } from 'react';
import editButton from '../assets/edit-btn.svg';
import deleteButton from '../assets/delete-btn.svg';
import calanderIcon from './calendar_month_black_24dp 2.svg'

function Card({ task, toggleCompletion, deleteTask, editTask }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCheckboxChange = () => {
    toggleCompletion(task.id); // Call toggleCompletion function with task ID
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Show delete confirmation modal
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id); // Call deleteTask function with task ID
    setShowDeleteModal(false); // Close delete confirmation modal
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false); // Close delete confirmation modal
  };

  const handleEditClick = () => {
    editTask(task.id); // Call editTask function with task ID
  };

  return (
    <div className='card-container'>
      <div className='card-sub-container'>
        <input
          type="checkbox"
          id="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange} // Handle checkbox change event
        />
        <div className='card-contents'>
          <div className='card-contents-top'>
            <p>{task.title}</p>
            <div className="card-contents-icons">
              <img src={editButton} alt="edit button" onClick={handleEditClick} style={{ cursor: 'pointer' }} />
              <img src={deleteButton} alt="delete btn" onClick={handleDeleteClick} style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <div className='card-contents-bottom'>
            <p>{task.description}</p>
          </div>
          <div className='calander-container' >
          <img src={calanderIcon} alt="calander icon" />
          <p>by {task.dueDate}</p>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Are you sure you want to delete this task?</p>
            <div className="button-container">
              <button onClick={handleCancelDelete}>Cancel</button>
              <button onClick={handleConfirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
