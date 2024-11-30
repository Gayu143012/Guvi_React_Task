import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

const CustomNavbar = () => {
  return (
    <Navbar color="dark"  expand="md" className="navbar">
      <NavbarBrand className="navbar-brand " href="/">CRUD Operations</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/manage" className="nav-link">Users Data</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
