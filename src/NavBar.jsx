import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"; // Import Link from React Router
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container></Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <ul>
        <li>
          <Link to="/">About</Link> {/* This Link is now used to navigate to About */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* This Link navigates to Contact */}
        </li>
        <li>
          <Link to="/Resume">Resume</Link> {/* This Link navigates to Contact */}
        </li>
        <li>
          <Link to="Project">Project</Link> {/* This Link navigates to Contact */}
        </li>
      </ul>
    </Navbar>
  );
}

export default NavBar;
