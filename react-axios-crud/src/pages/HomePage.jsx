import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import UserForm from '../components/UserForm';

const HomePage = ({ onAddUser, initialData, editing }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (user) => {
    onAddUser(user);  // Add or update the user
    if (editing) {
      // If we're editing, navigate to the 'manage' page after updating
      navigate('/manage');
    }
  };

  return (
    <div className="home-page">
      <div className="home-page-content">
        <Container>
          <Row className="align-items-center">
            <Col sm="6">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-3483604-2912020.png"
                alt="Contact Us"
                className="contact-image"
              />
            </Col>
            <Col sm="6">
              <div className="form-container">
                {/* Pass the handleSubmit to UserForm */}
                <UserForm onSubmit={handleSubmit} initialData={initialData} editing={editing} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
