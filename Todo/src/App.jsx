import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard';
import StatusFilter from './components/StatusFilter';
import './styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const newName = prompt('Enter new task name:');
    const newDescription = prompt('Enter new description:');
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, name: newName, description: newDescription } : todo
      )
    );
  };

  const changeStatus = (id, status) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status } : todo)));
  };

  const filteredTodos =
    filter === 'All' ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <div className="container">
      <h1 className="text-center my-4">MY TODO</h1>
      <TodoForm onAdd={addTodo} />

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h3 className="m-0">My Todo</h3>
        
        <StatusFilter filter={filter} setFilter={setFilter} />
      </div>

      <div className="mt-4 row g-3">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="col-md-4 col-sm-6">
            <TodoCard
              todo={todo}
              onDelete={deleteTodo}
              onEdit={editTodo}
              onStatusChange={changeStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
