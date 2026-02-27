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
              {/* if the main url or first image is actually a video file, render a video player */}
              {(() => {
                const url = card.imageUrl || (card.imageList && card.imageList[0]) || "";
                if (url.toLowerCase().endsWith(".mp4")) {
                  return (
                    <div className="video-container">
                      <video
                        src={url}
                        controls
                        className="w-100"
                        style={{ height: "600px" }}
                      />
                    </div>
                  );
                }
                // otherwise show carousel of images
                return (
                  <Carousel>
                    {card.imageList &&
                      card.imageList.map((img) => (
                        <Carousel.Item key={img}>
                          <img
                            src={img}
                            className="w-100 img-fluid"
                            style={{ height: "600px" }}
                            alt="carousel slide"
                          />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                );
              })()}
              <div className="card-body">
                {/* build a full-width table of available fields */}
                <div className="table-responsive">
                  {/* make table background transparent so it doesn't show white */}
                  <table
                    className="table text-white mb-0 bg-transparent"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #fff",
                      borderColor: "#fff",
                    }}
                  >
                    <tbody>
                      {Object.entries(card)
                        .filter(
                          ([key]) =>
                            ![
                              "id",
                              "imageList",
                              "imageUrl",
                              "vedUrl",
                              "phone",
                              "ownerName",
                            ].includes(key)
                        )
                        .map(([key, value]) => {
                          if (value === null || value === undefined || value === "") {
                            return null;
                          }
                          const labels = {
                            code: "الكود",
                            area: "المساحة",
                            address: "العنوان",
                            fullAddress: "العنوان الكامل",
                            floor: "الدور",
                            Finish: "التشطيب",
                          };
                          const label = labels[key] || key;
                          return (
                            <tr
                              key={key}
                              className="bg-transparent"
                              style={{
                                backgroundColor: "transparent",
                                borderTop: "1px solid #fff",
                              }}
                            >
                              <th
                                className="fw-bold bg-transparent"
                                style={{ color: "#FCDF5F", backgroundColor: "transparent" }}
                              >
                                {label}
                              </th>
                              <td
                                className="bg-transparent text-start"
                                style={{ color: "#fff", backgroundColor: "transparent" }}
                              >
                                {value}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                <div className="row justify-content-center">
                  <div
                    className="btn mt-2"
                    style={{ width: "150px", backgroundColor: "#FCDF5F" }}>
                      <a
                        href="https://wa.me/201142193752"
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
