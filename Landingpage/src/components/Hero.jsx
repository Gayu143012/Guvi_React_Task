import React from 'react';
import '../assets/bg-masthead.jpg'
import EmailForm from './EmailForm';

const Header = () => {
  return (
    <header className="masthead">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              <h1 className="mb-5">EXPLORE YOUR DREAM DESTINATION!! <h3 >Offering comprehencive travel solutions to individuals and groups</h3></h1>
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
