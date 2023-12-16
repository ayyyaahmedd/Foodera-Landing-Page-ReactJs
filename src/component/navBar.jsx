import React from 'react';
import './NavStyle.css'
import logo from './images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return ( 
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home" className="navbar-brand"><img src={logo} alt="logo" title='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav  className="navbar-nav  ms-auto mb-2 mb-lg-0">
                <Nav.Link className="nav-link active list-item" aria-current="page" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link list-item" href="/about">About</Nav.Link>
                <Nav.Link className="nav-link list-item" href="#">Explore Food</Nav.Link>
                <Nav.Link className="nav-link list-item" href="#">Reviews</Nav.Link>
                <Nav.Link className="nav-link contact-num" href="#">+111 222 333</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
    );
}

export default NavBar;