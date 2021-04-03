import React from 'react'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import LightTheme from '../themes/Light'

const Navigator = ({theme}) => {
  return (
  <Navbar collapseOnSelect expand="lg" bg={theme == LightTheme ? "light":"dark"} variant={theme == LightTheme ? "light":"dark"} >
  <Navbar.Brand href="/">Cheat Sheet</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end">
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Navigator
