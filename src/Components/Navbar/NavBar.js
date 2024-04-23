import React from 'react'
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
  return (
    <div>
      <header>
      <nav className="navbar position-fixed navbar-expand-lg bg-light w-100">
                <div className="container">
                <a href="#" className="navbar-brand text-primary" id="brand">سكن قنا</a>
                <a href="#x" data-toggle="collapse" className="navbar-toggler">
                <FontAwesomeIcon icon={faBars} id="nav-icon" />
                </a>
                <div className="collapse navbar-collapse" id="x">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item p-1 active"><a href="index.php" className="nav-link text-primary">الرئيسية</a></li>
                        <li className="nav-item p-1"><a href="#category" className="nav-link text-primary">من نحن </a></li>
                        <li className="nav-item p-1"><a href="#category" className="nav-link text-primary">العقارات</a></li>
                        <li className="nav-item p-1 "><a href="#footer" className="nav-link text-primary">اتصل بنا</a></li>
                    </ul>
                </div>      
                <div className="links">
                <a target='_blank' href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0"><FontAwesomeIcon icon={faWhatsapp}  /></a>
                <a target='_blank' href="https://t.me/Ahmed17112"><FontAwesomeIcon icon={faTelegram}  /></a>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=100010113310839&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook}  /></a>
                <a target='_blank' href="mailto:aa1536198@gmail.com"><FontAwesomeIcon icon={faEnvelope}  /></a>
                </div>      
            </div>
            </nav>
      </header>
    </div>
  )
}

export default NavBar;
