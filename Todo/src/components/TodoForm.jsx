import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState({ name: '', description: '', status: 'Not Completed' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.name.trim() && todo.description.trim()) {
      onAdd(todo); 
      setTodo({ name: '', description: '', status: 'Not Completed' }); // Reset the form
    } else {
      alert('Please enter both a name and a description.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3 align-items-center">
      <div className="col-md-4">
        <input
          type="text"
          placeholder="Todo Name"
          value={todo.name}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
          className="form-control"
        />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          placeholder="Todo Description"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          className="form-control"
        />
      </div>
      <div className="col-md-3">
        <button type="submit" className="btn btn-success w-100">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
