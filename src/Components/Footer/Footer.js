import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div>
        <footer className='text-center'>
            <h2 className='text-white'>سكن قنا</h2>
        <div className='my-3'>
                <a target='_blank' href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0"><FontAwesomeIcon icon={faWhatsapp}  /></a>
                <a target='_blank' href="https://t.me/Ahmed17112"><FontAwesomeIcon icon={faTelegram}  /></a>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=100010113310839&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook}  /></a>
                <a target='_blank' href="mailto:aa1536198@gmail.com"><FontAwesomeIcon icon={faEnvelope}  /></a>
        </div>
        <p>COPYRIGHT © 2024. ALL RIGHTS RESERVED. DESIGNED BY AHMED ALI</p>
    </footer>
    </div>
  )
}

export default Footer
