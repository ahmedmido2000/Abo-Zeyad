import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import CardsFile  from "../Components/Cards/Cards.json"; 
const CardDetails = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);
    useEffect(() => {
        setCard(CardsFile.find(card => card.id === parseInt(id)));
    }, []);
  return (
    <div>
        {card && (
                <>
                <div className="col-12 text-left mb-2">
    <div className="card m-auto">
        <Carousel>
                {card.imageList.map(img=>(
            <Carousel.Item key={img}>
                    <img src={img} className='w-100 img-fluid' style={{height:"400px"}} text="First slide" />
            </Carousel.Item>
                ))}
        </Carousel>
        <div className="card-body">
            <div className='row mt-3'>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#3D63DD'}}>عدد الغرف</p>
                    <p className="card-text" style={{color:'#04041b'}}>{card.rooms}</p>
                </div>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#3D63DD'}}>عدد السراير</p>
                    <p className="card-text" style={{color:'#04041b'}}>{card.beds}</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#3D63DD'}}>التشطيب</p>
                    <p className="card-text" style={{color:'#04041b'}}>{card.finishing}</p>
                </div>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#3D63DD'}}>التهوية</p>
                    <p className="card-text" style={{color:'#04041b'}}>{card.ventilation}</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#3D63DD'}}>الفواتير</p>
                    <p className="card-text" style={{color:'#04041b'}}>{card.invoices}</p>
                </div>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#3D63DD'}}>السعر</p>
                    <p className="card-text" style={{color:'#04041b'}}>{card.price}</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#3D63DD'}}>الكود</p>
                    <p className="card-text" style={{color:'#04041b'}}>{card.code}</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex gap-2 mt-2'>
                    <p className="card-text fw-bold text-end" style={{color:'#3D63DD'}}>العنوان </p>
                    <p className="card-text fw-bold text-end" style={{color:'#3D63DD'}}>: </p>
                    <p className="card-text text-end" style={{color:'#04041b'}}>{card.fullAddress}</p>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className="btn btn-primary mt-2" style={{width:"150px"}}>
                    <a href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0" className='text-white ' target='_blank'>تواصل معنا</a>
                </div>
            </div>
        </div>
      </div>
</div> 
                </>
            )}
    </div>
  )
}

export default CardDetails
