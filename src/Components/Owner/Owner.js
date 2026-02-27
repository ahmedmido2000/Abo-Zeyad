import React, {useEffect } from 'react';
import './Owner.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
const Owner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); // run once only
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <div>
      <section className="owner mt-5" id='owner' data-aos="fade-up">
        <div className="owner-text" >
          <h2 className='text-center mb-1'>هل أنت مالك ؟</h2>
          <p>إذا كنت من ملاك العقارات في محافظة قنا وترغب في بيعها ، فعليك التواصل معنا لعرض العقار الخاص بك على موقعنا.</p>
          <div className='text-center'>
            <div className="btn mt-2" style={{backgroundColor:'#FCDF5F'}}>
              <a href="https://wa.me/201142193752" className='text-dark fw-bold' target='_blank' rel="noreferrer">تواصل معنا</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Owner;
