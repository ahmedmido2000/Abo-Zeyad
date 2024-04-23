import React from 'react'
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  return (
    <div>
      <header>
      <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#" className="text-primary">سكن قنا</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="index.php" className="text-primary">الرئيسية</Nav.Link>
            <Nav.Link href="#category" className="text-primary">من نحن</Nav.Link>
            <Nav.Link href="#category" className="text-primary">العقارات</Nav.Link>
            <Nav.Link href="#footer" className="text-primary">اتصل بنا</Nav.Link>
          </Nav>
        <div className="links">
          <a target='_blank' href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a target='_blank' href="https://t.me/Ahmed17112"><FontAwesomeIcon icon={faTelegram} /></a>
          <a target='_blank' href="https://www.facebook.com/profile.php?id=100010113310839&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a>
          <a target='_blank' href="mailto:aa1536198@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
      </header>
    </div>
  )
}

export default NavBar;