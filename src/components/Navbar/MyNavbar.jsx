import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                style={({ isActive }) => ({ color: isActive && "orange" })}
                className="nav-link"
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "orange" })}
                className="nav-link"
                to="/about"
              >
                ABOUT ME
              </NavLink>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "orange" })}
                className="nav-link"
                to="/projets"
              >
                MY PROJECTS
              </NavLink>
              <NavLink
                style={({ isActive }) => ({ color: isActive && "red" })}
                className="nav-link"
                to="/contact"
              >
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
