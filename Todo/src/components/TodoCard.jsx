import React from 'react';
import '../styles/App.css'; 

const TodoCard = ({ todo, onDelete, onEdit, onStatusChange }) => {
  return (
    <div className="todo-card">
      <h5 className="todo-name">Name: {todo.name}</h5>
      <p className="todo-description">Description: {todo.description}</p>

      <div className="status-container">
        <span className="status-label">Status: </span>
        <select
          value={todo.status}
          onChange={(e) => onStatusChange(todo.id, e.target.value)}
          className="status-select"
        >
          <option value="Not Completed">Not Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="button-container">
        <button
          onClick={() => onEdit(todo.id)}
          className="btn-edit"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
