import React, { useState, useEffect } from 'react';
import { Button, Input, FormGroup, Label, Container } from 'reactstrap';

const UserForm = ({ onSubmit, initialData = null, editing = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editing) {
      setFormData({ name: '', email: '' }); // Reset form for new user
    }
  };

  return (
    <Container className="form-wrapper">
      <h3>{editing ? 'Update User' : 'Add New User'}</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </FormGroup>
        <Button type="submit" color="primary">{editing ? 'Update' : 'Add'}</Button>
      </form>
    </Container>
  );
};

export default UserForm;
