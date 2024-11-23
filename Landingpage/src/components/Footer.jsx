import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import { RiChatPrivateFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-links">
        <a href="#about"><FaInfoCircle />About</a> 
        <a href="#contact"><IoMdContact />Contact</a> 
        <a href="#terms"><FaListCheck />Terms of Use</a> 
        <a href="#privacy"><RiChatPrivateFill />Privacy Policy</a>
      </p>
      <p>&copy; Your Website 2023. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
