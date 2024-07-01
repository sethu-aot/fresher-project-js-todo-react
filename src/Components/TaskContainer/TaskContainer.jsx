import React, { useState } from 'react';
import './TaskContainer.css';
import Card from '../../Shared/card'; // Adjust import path as necessary
import Button from '../../Shared/button'; // Adjust import path as necessary
import EditModal from '../../Shared/EditModal';

function TaskContainer({ ctnLabel, tasks, showClearButton, setTasks }) {
  const [editTask, setEditTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditTask(taskToEdit);
    setIsEditModalOpen(true);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsEditModalOpen(false);
  };

  return (
    <div className='taskcontainer'>
      <div className='clear-btn-container'>
      <p>{ctnLabel}</p>
      {ctnLabel === "Completed Tasks" && showClearButton && <Button btnText={"Clear completed tasks"} onClick={clearCompletedTasks} />}
      </div>
      {tasks
        .filter(task => ctnLabel === "Active Tasks" ? !task.completed : task.completed)
        .map(task => (
          <Card
            key={task.id}
            task={task}
            toggleCompletion={toggleCompletion}
            deleteTask={deleteTask}
            editTask={handleEditTask} // Pass the editTask function
          />
        ))}
      {isEditModalOpen && <EditModal task={editTask} updateTask={updateTask} closeModal={() => setIsEditModalOpen(false)} />}
    </div>
  );
}

export default TaskContainer;
