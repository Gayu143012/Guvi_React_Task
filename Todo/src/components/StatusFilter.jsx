import React from 'react';

const StatusFilter = ({ filter, setFilter }) => {
  return (
    <div className="mb-3 ">
      <label>Status Filter: </label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-select w-auto d-inline-block"
      >
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
};

export default StatusFilter;
