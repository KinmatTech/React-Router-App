import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";

import Skills from "./pages/Skills";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => (
  <MemoryRouter>
    <Navbar id="nav" expand="sm" bg="dark" variant="dark">
      <Navbar.Brand>Kinmat Tech ICT World</Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to="skills">
          <Nav.Link>Skills</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
    <Container className="pt-3">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
     </Container>
  </MemoryRouter>
);

export default App;