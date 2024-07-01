import React, { useState } from 'react';
import './SearchBar.css';
import InputField from '../../Shared/InputField'; // Adjust import path as necessary

function SearchBar({ tasks, setFilteredTasks }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    setSearchTerm(newSearchTerm);
    filterTasks(newSearchTerm, sortBy); // Filter immediately when search term changes
  };

  const handleSortChange = (e) => {
    const newSortBy = e.target.value;
    setSortBy(newSortBy); // Update sortBy state first
    filterTasks(searchTerm, newSortBy); // Then filter based on new sort criteria
  };

  const filterTasks = (searchTerm, sortBy) => {
    let filteredTasks = [...tasks];

    // Filter by search term
    filteredTasks = filteredTasks.filter(task =>
      task.title.toLowerCase().includes(searchTerm)
    );

    // Sort tasks based on sortBy option
    if (sortBy === 'newest') {
      filteredTasks.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    } else if (sortBy === 'oldest') {
      filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    // Update filtered tasks state
    setFilteredTasks(filteredTasks);
  };

  return (
    <div className='SearchContainer'>
      <InputField InputFieldclass={"searchbar"} id={"search"} placeholderValue={"Search by name"} value={searchTerm} onChange={handleSearchChange} />
      <div>
        
      Sort by: <select name="select" id="select" value={sortBy} onChange={handleSortChange}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
      
      </div>
    </div>
  );
}

export default SearchBar;
