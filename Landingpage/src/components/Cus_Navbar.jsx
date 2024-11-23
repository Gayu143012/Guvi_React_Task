import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ButtonComponent from './ButtonComponent'; 

const Cus_Navbar = () => {
  return (
    <Navbar color="light" light expand="md" className="static-top">
      <NavbarBrand href="/">TRAVEL PORTAL</NavbarBrand>
      
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="#signup">
            <ButtonComponent value="Sign Up" /> 
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Cus_Navbar;
