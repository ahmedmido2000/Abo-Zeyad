import React, {useEffect } from 'react';
import './About.css'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div>
            <section className="about" id='about'>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 text-end text-primary" data-aos="fade-up">
                    <h4 className='mb-2 fw-bold' style={{color:'#FCDF5F'}}>من نحن ؟</h4>
                    <h5 className='para'>مجموعة من الخريجين نسعى لتيسير عملية ايجاد السكن المناسب على طلاب وطالبات جامعة جنوب الوادى بقنا من خلال موقع واحد يجمع بين الملاك والطلاب.</h5>
                    <h4 className=' mb-2 mt-5 fw-bold' style={{color:'#FCDF5F'}}>المميزات :</h4>
                    <ul className='mx-5 my-4' style={{color:'#FCDF5F'}}>
                        <li><h5 className='para'>سهولة ايجاد السكن المناسب فى أسرع وقت</h5></li>
                        <li><h5 className='para'>سهولة التواصل بين الطالب والمالك</h5></li>
                        <li><h5 className='para'> سعر مناسب للطلاب والمُلاك</h5></li>
                        <li><h5 className='para'>جمع أكبر عدد من الشقق فى مكان واحد</h5></li>
                        {/* <li><h5 className='para'></h5></li>
                        <li><h5 className='para'></h5></li> */}
                    </ul>
                </div>
                <div className="col-lg-6 m-auto" data-aos="fade-up">
                    <img src='/8801726441630182879.jpg' className="w-100 img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About;
