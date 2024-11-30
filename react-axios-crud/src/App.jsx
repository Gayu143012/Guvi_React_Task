import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ManageUserPage from './pages/ManageUserPage';
import { fetchUsers, addUser, updateUser, deleteUser } from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  const handleAddUser = async (user) => {
    const newUser = await addUser(user);
    setUsers([...users, newUser]);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = async (updatedUser) => {
    const result = await updateUser(updatedUser.id, updatedUser);
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? result : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage onAddUser={handleAddUser} />}
        />
        <Route
          path="/manage"
          element={
            <ManageUserPage
              users={users}
              onEdit={handleEditUser}
              onDelete={handleDeleteUser}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <HomePage
              onAddUser={handleUpdateUser}
              initialData={editingUser}
              editing={true}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
