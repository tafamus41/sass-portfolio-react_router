import React from "react";
// import { Container } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./MyNavbar.scss"

const MyNavbar = () => {
  return (
    <div>
      <Navbar id="Navbar">
          {/* <Navbar.Toggle /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            {/* <Nav className="pages"> */}
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
                to="/projects"
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
            {/* </Nav> */}
          {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default MyNavbar;
