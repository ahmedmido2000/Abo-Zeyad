import React from 'react';
import './Owner.css';

const Owner = () => {
  return (
    <div>
      <section className="owner mt-5" id='owner'>
        <div className="owner-text">
          <h2>هل أنت مالك ؟</h2>
          <p>إذا كنت من ملاك العقارات في محافظة قنا وترغب في تأجيرها للطلاب، فعليك التواصل معنا لعرض العقار الخاص بك على موقعنا.</p>
          <div className="btn mt-2" style={{backgroundColor:'#3D63DD'}}>
            <a href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0" className='text-white' target='_blank'>تواصل معنا</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Owner;
