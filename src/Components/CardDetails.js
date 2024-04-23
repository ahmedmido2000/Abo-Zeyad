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
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>عدد الغرف</p>
                    <p className="card-text" style={{color:'#005792'}}>{card.rooms}</p>
                </div>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>عدد السراير</p>
                    <p className="card-text" style={{color:'#005792'}}>{card.beds}</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>التشطيب</p>
                    <p className="card-text" style={{color:'#005792'}}>{card.finishing}</p>
                </div>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>التهوية</p>
                    <p className="card-text" style={{color:'#005792'}}>{card.ventilation}</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>الفواتير</p>
                    <p className="card-text" style={{color:'#005792'}}>{card.invoices}</p>
                </div>
                <div className='d-flex justify-content-between col-md-6'>
                    <p className="card-text fw-bold" style={{color:'#00204A'}}>السعر</p>
                    <p className="card-text" style={{color:'#005792'}}>{card.price}</p>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex gap-2 mt-2'>
                    <p className="card-text fw-bold text-end">العنوان </p>
                    <p className="card-text fw-bold text-end">: </p>
                    <p className="card-text text-end" style={{color:'#005792'}}>{card.fullAddress}</p>
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
