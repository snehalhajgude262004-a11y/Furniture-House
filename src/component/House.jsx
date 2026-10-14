import React from "react";
import "./House.css";

const househeading = "THIS IS FURNITURE HOUSE";
const househead = "SHOP OVER OUR BEST BRANDS";
const housecontent = [
  {
    houseimg: "./Images/Illustration/h1.png",
    hpusep: "COLORFUL SOFA",
  },
  {
    houseimg: "./Images/Illustration/h2.png",
    hpusep: "DINING TABLE",
  },
  {
    houseimg: "./Images/Illustration/h3.png",
    hpusep: "WOW SOFA COLLECTIONS",
  },
  {
    houseimg: "./Images/Illustration/h4.png",
    hpusep: "BED COLLECTION",
  },
  {
    houseimg: "./Images/Illustration/h5.png",
    hpusep: "SOFA COLLECTION",
  },
  {
    houseimg: "./Images/Illustration/h6.png",
    hpusep: "TABLE COLLECTION",
  },
];

const House = () => {
  return (
    <section className="container-fluid">
      <section className="container">
        <h3 className="text-center mt-5 mb-2">{househeading}</h3>
        <div className="divide"></div>
        <p className="text-center mt-2">{househead}</p>
        <div className="row">
          {housecontent.map((housecontent, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 house">
              <img src={housecontent.houseimg} alt="" />
              <p className="text-center mt-3 fw-medium fs-5 mb-5">{housecontent.hpusep}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};
export default House;
