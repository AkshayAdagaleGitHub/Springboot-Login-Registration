import { hot }  from 'react-hot-loader';
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'

const NavigationBar = () => (
    <nav>
        <ul>
         <li>
             <Link to="/">Home</Link>
         </li>
         <li>
             <Link to="/loginForm">Login Form</Link>
         </li>
         <li>
             <Link to="/registration">Register</Link>
         </li>
        </ul>
      </nav>
);

export default hot(module)(NavigationBar);


/*
   <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        <LinkContainer to='/loginForm'>
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/registration'>
                            <Nav.Link>Registration</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                </Navbar.Collapse>
            </Navbar>
*/