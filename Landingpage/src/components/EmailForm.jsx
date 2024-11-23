import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setErrorMessage('Email Address is required.');
    } else if (!emailRegex.test(email)) {
      setErrorMessage('Email Address is not valid.');
    } else {
      setErrorMessage('');
      alert(`Thank you! Your email address: ${email} has been submitted.`);
    }
  };

  return (
    <form
      className="form-subscribe"
      id="contactForm"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col">
          <input
            className={`form-control form-control-lg ${errorMessage ? 'is-invalid' : ''}`}
            id="emailAddress"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorMessage && (
            <div className="invalid-feedback text-white">{errorMessage}</div>
          )}
        </div>
        <div className="col-auto">
          <ButtonComponent value="Submit" />
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
