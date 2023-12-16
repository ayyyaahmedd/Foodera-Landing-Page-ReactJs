import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import './NavStyle.css';
import logo from './images/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-brand">
              <img src={logo} alt="logo" title="logo" />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
              <LinkContainer to="/" exact>
                <Nav.Link className="nav-link active list-item" aria-current="page">
                  Home
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav-link list-item">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/explore-food">
                <Nav.Link className="nav-link list-item">Explore Food</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/reviews">
                <Nav.Link className="nav-link list-item">Reviews</Nav.Link>
              </LinkContainer>
              <Nav.Link className="nav-link contact-num" href="#">
                +111 222 333
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;