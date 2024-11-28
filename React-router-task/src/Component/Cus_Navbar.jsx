import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Cus_Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto d-flex justify-content-center gap-5" navbar>
          <NavItem>
            <Link to="/" className="nav-link">All Courses</Link> 
          </NavItem>
          <NavItem>
            <Link to="/fullstack" className="nav-link">Full Stack Development</Link>
          </NavItem>
          <NavItem>
            <Link to="/datascience" className="nav-link">Data Science</Link> 
          </NavItem>
          <NavItem>
            <Link to="/cybersecurity" className="nav-link">Cybersecurity</Link> 
          </NavItem>
          <NavItem>
            <Link to="/career" className="nav-link">Career</Link> 
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Cus_Navbar;
