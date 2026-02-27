import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Cards.css";
import CardsFile from "./Cards.json";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(CardsFile);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section className="text-center mt-5 mb-5" id="cards">
        <div className="container">
          <div className="head">
            <h2 className="m-5 fw-bold" style={{ color: "#FCDF5F" }}>
              الشقق المعروضة
            </h2>
          </div>
          <div className="row m-auto">
            {cards.map((card) => (
              <div
                className="col-lg-4 col-md-6 mb-2"
                data-aos="fade-up"
                key={card.id}
              >
                <div
                  className="card h-100"
                  style={{
                    width: "18rem",
                    backgroundColor: "#0D0D0D",
                    border: "2px solid #FCDF5F",
                  }}
                >
                  {/* display video when the url points to an mp4, otherwise image */}
                  {(() => {
                    const url = card.imageUrl || "";
                    if (url.toLowerCase().endsWith(".mp4")) {
                      return (
                        <div className="video-container">
                          <video
                            src={url}
                            controls
                            className="w-100"
                            style={{ height: "400px" }}
                          />
                        </div>
                      );
                    }
                    return (
                      <img
                        className="card-img-top"
                        style={{ height: "400px" }}
                        src={url}
                        alt="card"
                      />
                    );
                  })()}
                  <div className="card-body">
                    {/* primary information from the JSON file */}
                    <h5 className="card-text text-white mb-3">
                      {card.address}
                    </h5>
                    {/* build a horizontal row of whatever attributes are present (exclude code) */}
                    {(() => {
                      // list of keys we care about and their labels
                      const attrMap = {
                        type: "نوع السكن",
                        rooms: "الغرف",
                        beds: "السراير",
                        area: "المساحة",
                        floor: "الدور",
                        Finish: "التشطيب",
                      };
                      const present = Object.keys(attrMap).filter((k) => card[k]);
                      if (present.length === 0) return null;
                      return (
                        <>
                          <div className="row pt-1 mt-2 border-top">
                            {present.map((k) => (
                              <div
                                key={k}
                                className={`col-${12 / present.length}`}
                                style={{ color: "#FCDF5F" }}
                              >
                                {attrMap[k]}
                              </div>
                            ))}
                          </div>
                          <div className="row">
                            {present.map((k) => (
                              <div
                                key={k}
                                className={`col-${12 / present.length} text-white`}
                              >
                                {card[k]}
                              </div>
                            ))}
                          </div>
                        </>
                      );
                    })()}
                    <NavLink
                      className="btn fw-bold text-dark mt-2"
                      style={{ backgroundColor: "#FCDF5F" }}
                      to={`/card/${card.id}`}
                    >
                      عرض التفاصيل
                    </NavLink>
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
