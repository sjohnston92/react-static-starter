import React from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import LightTheme from '../themes/Light'

const Navigator = ({theme}) => {
  return (
  <Navbar collapseOnSelect expand="lg" bg={theme == LightTheme ? "light":"dark"} variant={theme == LightTheme ? "light":"dark"} >
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end">
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigator
