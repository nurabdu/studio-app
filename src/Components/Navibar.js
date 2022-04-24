import React, { useState }from "react";
import { Button, Navbar, Nav, NavLink, Container, Modal, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Styles = styled.div `
    a, .navbar-brand, .navbar-nav .navbar-link {
        color: #adb1b8;
        &:hover {
            color: white
        }
    }
    .navbar {
        height: 90px;
    }

`

export default function Navibar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleshow = () => setShow(true);

    return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>+ 79670241763</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink><Link to="/">Home</Link></NavLink>
                    <NavLink><Link to="/about">About</Link></NavLink>
                </Nav>
                <Nav>
                    <Button variant="primary" className="me-2" onClick={handleshow}>Log In</Button>
                    <Button variant="primary" onClick={handleshow}>Sign out</Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Styles>
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group conttrolId="fromBasicEmail">
                <Form.Label>Email.Adress</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">We'll never share your email with anyone else</Form.Text>
              </Form.Group>
              <Form.Group controlId="fromBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>

              </Form.Group>
              <Form.Group controlId="fromBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
    </>
)}