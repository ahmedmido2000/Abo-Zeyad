import React from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div>
      <header>
        <Navbar style={{backgroundColor:'#000'}} expand="lg" variant="light">
          <div className="container">
            <Navbar.Brand href="#" className="fw-bold">
              <img src={`${process.env.PUBLIC_URL}/img.png`} style={{width:'100px'}} className='p-0 m-0 img-fluid' alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
              <FontAwesomeIcon icon={faBars} className="custom-toggler-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#" style={{color:'#FCDF5F'}}>الرئيسية</Nav.Link>
                <Nav.Link href="#about" style={{color:'#FCDF5F'}}>من نحن</Nav.Link>
                <Nav.Link href="#cards" style={{color:'#FCDF5F'}}>العقارات</Nav.Link>
                <Nav.Link href="#owner" style={{color:'#FCDF5F'}}>اتصل بنا</Nav.Link>
              </Nav>
              <div className="links">
                <a target='_blank' style={{color:'#FCDF5F'}} href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a target='_blank' style={{color:'#FCDF5F'}} href="https://t.me/Ahmed17112"><FontAwesomeIcon icon={faTelegram} /></a>
                <a target='_blank' style={{color:'#FCDF5F'}} href="https://www.facebook.com/profile.php?id=100010113310839&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a>
                <a target='_blank' style={{color:'#FCDF5F'}} href="mailto:aa1536198@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBar;
