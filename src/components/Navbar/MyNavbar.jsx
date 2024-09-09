import { Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink style={({ isActive }) => ({ color: isActive && "orange" })}
              className="nav-link"
              to="/">HOME</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive && "orange" })}
              className="nav-link"
              to="/about">ABOUT ME</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive && "orange" })}
              className="nav-link"
              to="/projets">MY PROJECTS</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive && "red" })}
              className="nav-link"
              to="/contact">CONTACT</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MyNavbar;