import React from 'react';
import Button from '../../Shared/button'; // Adjust import path as necessary
import './NavBar.css';

function NavBar({ onAddTaskClick }) {
  return (
    <div className='navbar'>
      <h3>My Tasks</h3>
      <Button btnText={"Add new task"} onClick={onAddTaskClick} />
    </div>
  );
}

export default NavBar;
