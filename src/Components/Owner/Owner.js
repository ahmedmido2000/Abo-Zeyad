import React, {useEffect } from 'react';
import './Owner.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
const Owner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section className="owner mt-5" id='owner' data-aos="fade-up">
        <div className="owner-text" >
          <h2 className='text-center mb-1'>هل أنت مالك ؟</h2>
          <p>إذا كنت من ملاك العقارات في محافظة قنا وترغب في تأجيرها للطلاب، فعليك التواصل معنا لعرض العقار الخاص بك على موقعنا.</p>
          <div className='text-center'>
            <div className="btn mt-2" style={{backgroundColor:'#FCDF5F'}}>
              <a href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0" className='text-dark fw-bold' target='_blank'>تواصل معنا</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Owner;
