import React from 'react';
import { Row, Col } from 'reactstrap';
import UserCard from '../components/UserCard';

const ManageUserPage = ({ users, onEdit, onDelete }) => {
  return (
    <div className="manage-users">
      <h1>Users</h1>
      <Row>
        {users.map((user) => (
          <Col sm="3" key={user.id}>
            <UserCard user={user} onEdit={onEdit} onDelete={onDelete} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageUserPage;
