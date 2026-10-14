import React from "react";
import "./Hero.css";

const heroheading = "Modern sofa";
const heroowner = "By defatch furniteure house";
const herolist = [
  {
    herolistimg: "./Images/Illustration/hero product .png",
    herolistheading: "PRODUCT LIST",
    herolistinfo:
      "We provide the best quality of products to you.We are always here to.",
  },
  {
    herolistimg: "./Images/Illustration/hero homedilevery.png",
    herolistheading: "HOME DELIVERY",
    herolistinfo:
      "We provide the best quality of products to you.We are always here to.",
  },
  {
    herolistimg: "./Images/Illustration/hero easyshopping.png",
    herolistheading: "EASY SHOPPING",
    herolistinfo:
      "We provide the best quality of products to you.We are always here to.",
  },
  {
    herolistimg: "./Images/Illustration/hero productcatalog.png",
    herolistheading: "PRODUCT CATALOG",
    herolistinfo:
      "We provide the best quality of products to you.We are always here to.",
  },
]
const banner1heading="NEW YEAR SALES";
const banner1p="NOW IN STORES";
const banner3heading="NEW ARRIVALS";
const banner3p="SHOP NOW";
  
const Hero = () => {
  return (
    <section>
      <div className="container-fluid hero">
        <div>
          <h2>{heroheading}</h2>
          <h1>{heroowner}</h1>
        </div>
      </div>
      <div>
        <div className="d-md-flex justify-content-center container">
          {herolist.map((herolist, index) => (
            <figure key={index} className="herolist">
              <img src={herolist.herolistimg}  alt=""/>
              <figcaption>
                <h3>{herolist.herolistheading}</h3>
                <p>{herolist.herolistinfo}</p>
              </figcaption>
            </figure>
          ))}
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 banner1">
            <h3 className="text-center pt-5 pt-md-4">{banner1heading}</h3>
            <div className="line"></div>
            <p className="text-center">{banner1p}</p>
          </div>
          <div className="col-md-6 col-lg-6 banner2"></div>
          <div className="col-md-3  col-lg-3 banner3 ">
            <h3 className=" text-center pt-5 pt-md-4">{banner3heading}</h3>
            <div className="line"></div>
            <p>{ banner3p}</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
