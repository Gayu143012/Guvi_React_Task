import React from 'react';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    onEdit(user);
    navigate(`/edit/${user.id}`);
  };

  const handleDelete = () => {
    onDelete(user.id);
  };

  return (
    <Card className="user-card">
      <CardBody>
        <CardTitle tag="h5">{user.name}</CardTitle>
        <CardText>{user.email}</CardText>
        <Button color="primary" onClick={handleEdit}>Edit</Button>
        <Button color="danger" onClick={handleDelete}>Delete</Button>
      </CardBody>
    </Card>
  );
};

export default UserCard;
