import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
export default function Logo() {
  return (
    
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo22.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{" "}
            JUHALIFESTYLE
          </Navbar.Brand>
          

          
            <Nav
              className=" my-2 my-lg-0 m-3 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="m-2 text-white" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="m-2 text-white" href="#action2">
                Shop
              </Nav.Link>
              <Nav.Link className="m-2 text-white" href="#action2">
                Featured
              </Nav.Link>
              <Nav.Link className="m-2 text-white" href="#action2">
                Featured
              </Nav.Link>
              <Nav.Link className="m-2 text-white" href="#action2">
                Recommended
              </Nav.Link>
            </Nav>
            <Form className="d-flex  juha " style={{ marginLeft: "15%" }}>
              <Form.Control
                type="search"
                placeholder="Search Product"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button className="d-flex  " style={{ marginLeft: "15%" }} variant="dark" size="lg" active>
              Sign Up
            </Button>
            <Button style={{marginLeft:"20px"}} variant="secondary" size="lg" active>
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
}
