import React, { useEffect } from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
        <footer className='text-center'>
        <div  data-aos="fade-up">
        <h2 className='text-white'>سكن قنا</h2>
           <div className='my-3'>
                <a target='_blank'  style={{backgroundColor:'#FCDF5F',color:'#000'}} href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0"><FontAwesomeIcon icon={faWhatsapp}  /></a>
                <a target='_blank' style={{backgroundColor:'#FCDF5F',color:'#000'}} href="https://t.me/Ahmed17112"><FontAwesomeIcon icon={faTelegram}  /></a>
                <a target='_blank' style={{backgroundColor:'#FCDF5F',color:'#000'}} href="https://www.facebook.com/profile.php?id=100010113310839&mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook}  /></a>
                <a target='_blank' style={{backgroundColor:'#FCDF5F',color:'#000'}} href="mailto:aa1536198@gmail.com"><FontAwesomeIcon icon={faEnvelope}  /></a>
            </div>
        <p>COPYRIGHT © 2024. ALL RIGHTS RESERVED. DESIGNED BY AHMED ALI</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
