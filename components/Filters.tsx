import React, { useState, useEffect } from 'react';

interface FiltersProps {
  filters: {
    searchTerm: string;
    category: string;
  };
  categories: string[]; // Assuming an array of category names
  onFilterChange: (newFilters: { searchTerm?: string; category?: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, categories, onFilterChange }) => {
  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    onFilterChange({ searchTerm });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ category: event.target.value });
  };

  return (
    <div className='col col-md-6 mb-2'>
      <form className="form-inline d-flex gap-1 md-form form-sm mt-0">
      <label htmlFor="category">Search by name:</label>
        <i className="fas fa-search" aria-hidden="true"></i>
        <input
          className="form-control form-control-sm ml-3 w-25"
          type="text"
          placeholder="Search"
          aria-label="Search"
          id="searchTerm"
          value={filters.searchTerm}
          onChange={handleSearchTermChange}
        />
      </form>

      <form className='form-inline d-flex gap-1 md-form form-sm mt-2'>
      <label htmlFor="category">Filter by Category:</label>
      <select
        id="category"
        value={filters.category}
        onChange={handleCategoryChange}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </form>
    </div>
  );
};

export default Filters;
