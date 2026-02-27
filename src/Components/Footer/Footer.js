import React, { useEffect } from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // include AOS to appease exhaustive-deps
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <div>
        <footer className='text-center' id='footer'>
        <div  data-aos="fade-up">
        <h2 className='text-white'>أبو زياد للعقارات</h2>
           <div className='my-3'>
                <a target='_blank' rel="noreferrer" style={{backgroundColor:'#FCDF5F',color:'#000'}} href="https://wa.me/201142193752"><FontAwesomeIcon icon={faWhatsapp}  /></a>
                <a target='_blank' rel="noreferrer" style={{backgroundColor:'#FCDF5F',color:'#000'}} href="https://www.tiktok.com/@user784956915?_r=1&_t=ZS-94Cg360TfU7"><FontAwesomeIcon icon={faTiktok}  /></a>
                <a target='_blank' rel="noreferrer" style={{backgroundColor:'#FCDF5F',color:'#000'}} href="https://www.facebook.com/share/1CBsFNH5bW/"><FontAwesomeIcon icon={faFacebook}  /></a>
            </div>
        <p>COPYRIGHT © 2026. ALL RIGHTS RESERVED. DESIGNED BY <a href="https://ahmedali-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="designer-link">AHMED ALI</a></p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
