import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>
            <section className="about" id='about'>
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-6 text-end text-primary">
                    <h2 className='mb-2 fw-bold' style={{color:'#00204A'}}>من نحن ؟</h2>
                    {/* <h5 className='para'>مجموعة من خريجى جامعة جنوب الوادى عانينا كثيراً فى إيجاد السكن المناسب خلال فترة الدراسة.</h5>
                    <h5 className='para'>فقررنا أن نسهل على طلاب جامعة جنوب الوادى إيجادالسكن المناسب بأسهل طريقة كوسيط بين المالك والطالب.</h5>
                    <h5 className='para'>ففى هذا الموقع يمكن للمالك أن يعرض السكن ومواصفاته بالكامل حتى يسهل على الطالب اختيار السكن المناسب.</h5> */}
                    <h5 className='para'>مجموعة من الخريجين نسعى لتيسير عملية ايجاد السكن المناسب على طلاب وطالبات جامعة جنوب الوادى بقنا من خلال موقع واحد يجمع بين الملاك والطلاب.</h5>
                    <h2 className=' mb-2 mt-2 fw-bold' style={{color:'#00204A'}}>ملاحظات :</h2>
                    <h5 className='para'>بمجرد معاينة الطالب للسكن والموافقة عليه يكون التعامل مباشرة مع المالك ونحن غير مسؤولون عن أى شىء بعد ذلك.</h5>
                    <h5 className='para mb-3'>الموقع مخصص لتأجير سكن الطلاب فقط وغير متاح عمليات البيع.</h5>
                </div>
                <div className="col-lg-6">
                    <img src='/101-1015198_cartoon-city-buildings-png-cartoon-city-no-background.png' className="w-100 img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About;
