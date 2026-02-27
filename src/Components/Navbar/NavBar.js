import React from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { faWhatsapp, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div>
      <header>
        <Navbar style={{backgroundColor:'#000'}} expand="lg" variant="light">
          <div className="container">
            <Navbar.Brand href="#" className="fw-bold">
              <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} className='p-0 m-0 img-fluid navbar-logo' alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
              <FontAwesomeIcon icon={faBars} className="custom-toggler-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="#" style={{color:'#FCDF5F'}}>الرئيسية</Nav.Link>
                <Nav.Link href="#cards" style={{color:'#FCDF5F'}}>العقارات</Nav.Link>
                <Nav.Link href="#footer" style={{color:'#FCDF5F'}}>اتصل بنا</Nav.Link>
              </Nav>
              <div className="links">
                <a target='_blank' rel="noreferrer" style={{color:'#FCDF5F'}} href="https://wa.me/201142193752"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a target='_blank' rel="noreferrer" style={{color:'#FCDF5F'}} href="https://www.tiktok.com/@user784956915?_r=1&_t=ZS-94Cg360TfU7"><FontAwesomeIcon icon={faTiktok} /></a>
                <a target='_blank' rel="noreferrer" style={{color:'#FCDF5F'}} href="https://www.facebook.com/share/1CBsFNH5bW/"><FontAwesomeIcon icon={faFacebook} /></a>
              </div>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </header>
    </div>
  );
}

export default NavBar;
