import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import "./Cards.css";
import CardsFile  from "./Cards.json"; 
import Carousel from "react-bootstrap/Carousel";
const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(CardsFile)
    }, []);
  return (
    <div>
      <section className="text-center mt-5 mb-5" id="cards">
        <div className="container">
          <div className="head">
            <h2 className="m-5 fw-bold" style={{color:'#3D63DD'}}>
              الشقق المعروضة
            </h2>
          </div>
          <div className="row m-auto">
          {cards.map(card => (
            <div className="col-xl-3 col-lg-4 col-md-6 mb-2" key={card.id}>
              <div className="card h-100" style={{ width: "18rem" }}>
                <img className="card-img-top" src={card.imageUrl} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title" style={{color:'#3D63DD'}}>{card.price}</h5>
                  <p className="card-text">
                  {card.address}
                 </p>
                  <div className="row pt-1 mt-2 border-top">
                    <div className="col-4" style={{color:'#3D63DD'}}>الغرف</div>
                    <div className="col-4 " style={{color:'#3D63DD'}}>السراير</div>
                    <div className="col-4" style={{color:'#3D63DD'}}>الكود</div>
                  </div>
                  <div className="row">
                    <div className="col-4">{card.rooms}</div>
                    <div className="col-4">{card.beds}</div>
                    <div className="col-4">{card.code}</div>
                  </div>
                  <NavLink className="btn text-light" style={{backgroundColor:'#3D63DD'}} to={`/card/${card.id}`}>معاينة</NavLink>
                </div>
              </div>
            </div>
))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;

{
  /* <div className="col-12 text-left mb-2">
    <div className="card m-auto">
        <Carousel>
            <Carousel.Item>
                <img src='/1.webp' text="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src='/2.webp' text="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img src='/3.jpg' text="Third slide" />
            </Carousel.Item>
        </Carousel>
        <div className="card-body">
            <div className='row mt-3'>
                <div className='d-flex justify-content-between col-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>عدد الغرف</p>
                    <p className="card-text" style={{color:'#005792'}}>3</p>
                </div>
                <div className='d-flex justify-content-between col-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>عدد السراير</p>
                    <p className="card-text" style={{color:'#005792'}}>6</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-between col-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>التشطيب</p>
                    <p className="card-text" style={{color:'#005792'}}>لوكس</p>
                </div>
                <div className='d-flex justify-content-between col-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>التهوية</p>
                    <p className="card-text" style={{color:'#005792'}}>مكيف</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-between col-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>الفواتير</p>
                    <p className="card-text" style={{color:'#005792'}}>شامل</p>
                </div>
                <div className='d-flex justify-content-between col-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>السعر</p>
                    <p className="card-text" style={{color:'#005792'}}>3500 جنيه</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex gap-2'>
                    <p className="card-text fw-bold text-end">العنوان </p>
                    <p className="card-text fw-bold text-end">: </p>
                    <p className="card-text text-end" style={{color:'#005792'}}>مساكن جامعة جنوب الوادى بقنا.عمارة رقم 15 الدور السابع شقة رقم 9. مساكن جامعة جنوب الوادى بقنا.عمارة رقم 15 الدور السابع شقة رقم 9. مساكن جامعة جنوب الوادى بقنا.عمارة رقم 15 الدور السابع شقة رقم 9.</p>
                </div>
            </div>
        </div>
      </div>
</div> */
}
