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
        <Navbar.Brand href="#" className='fw-bold' style={{color:'#3D63DD'}}>سكن قنا</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#" style={{color:'#3D63DD'}}>الرئيسية</Nav.Link>
            <Nav.Link href="#about" style={{color:'#3D63DD'}}>من نحن</Nav.Link>
            <Nav.Link href="#cards" style={{color:'#3D63DD'}}>العقارات</Nav.Link>
            <Nav.Link href="#owner" style={{color:'#3D63DD'}}>اتصل بنا</Nav.Link>
          </Nav>
        <div className="links">
          <a target='_blank' style={{color:'#3D63DD'}} href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0"><FontAwesomeIcon icon={faWhatsapp} /></a>
          <a target='_blank' style={{color:'#3D63DD'}} href="https://t.me/Ahmed17112"><FontAwesomeIcon icon={faTelegram} /></a>
          <a target='_blank' style={{color:'#3D63DD'}} href="https://www.facebook.com/profile.php?id=100010113310839&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a>
          <a target='_blank' style={{color:'#3D63DD'}} href="mailto:aa1536198@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
      </header>
    </div>
  )
}

export default NavBar;