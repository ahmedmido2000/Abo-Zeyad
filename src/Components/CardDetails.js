import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import CardsFile from "../Components/Cards/Cards.json";
const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  useEffect(() => {
    setCard(CardsFile.find((card) => card.id === parseInt(id)));
  }, []);
  return (
    <div className="mb-0 pb-0" style={{ backgroundColor: "#000" }}>
      {card && (
        <>
          <div className="col-md-8 m-auto text-left">
            <div
              className="card m-auto"
              style={{
                backgroundColor: "#0D0D0D",
                border: "2px solid #FCDF5F",
              }}>
              <Carousel>
                {card.imageList.map((img) => (
                  <Carousel.Item key={img}>
                    <img
                      src={img}
                      className="w-100 img-fluid"
                      style={{ height: "600px" }}
                      text="First slide"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="card-body">
                <div className="row mt-3">
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      الكود
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.code}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      نوع السكن
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.type}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      عدد الغرف
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.rooms}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      عدد السراير
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.beds}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      الدور
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.floar}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      التهوية
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.ventilation}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      الفواتير
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.invoices}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      نوع الغاز
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.gasType}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      الحجز بالسرير
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.BookingBybed}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      عدد السراير المتاحة
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.avialableBeds}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      واى فاى
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.wifi}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between col-md-6 border p-2">
                    <p
                      className="card-text fw-bold"
                      style={{ color: "#FCDF5F" }}>
                      سعر السرير
                    </p>
                    <p className="card-text" style={{ color: "#fff" }}>
                      {card.bedPrice}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex gap-2 border p-2">
                    <p
                      className="card-text fw-bold text-end"
                      style={{ color: "#FCDF5F" }}>
                      العنوان{" "}
                    </p>
                    <p
                      className="card-text fw-bold text-end"
                      style={{ color: "#FCDF5F" }}>
                      :{" "}
                    </p>
                    <p className="card-text text-end" style={{ color: "#fff" }}>
                      {card.fullAddress}
                    </p>
                  </div>
                </div>
                {card.notes && (
                  <div className="row">
                    <div className="d-flex gap-2 border p-2">
                      <p
                        className="card-text fw-bold text-end"
                        style={{ color: "#FCDF5F" }}>
                        ملاحظات{" "}
                      </p>
                      <p
                        className="card-text fw-bold text-end"
                        style={{ color: "#FCDF5F" }}>
                        :
                      </p>
                      <p
                        className="card-text text-end"
                        style={{ color: "#fff" }}>
                        {card.notes}
                      </p>
                    </div>
                  </div>
                )}
                <div className="row justify-content-center">
                  <div
                    className="btn mt-2"
                    style={{ width: "150px", backgroundColor: "#FCDF5F" }}>
                    <a
                      href="https://api.whatsapp.com/send/?phone=201155170824&text&app_absent=0"
                      className="text-dark fw-bold "
                      target="_blank">
                      تواصل معنا
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetails;
