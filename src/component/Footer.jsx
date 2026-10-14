import React from "react";
import "./Footer.css";

const foottop = [
  {
    foottoplogo: "./Images/Illustration/ft.1.png",
    foottopp: "  FREE SHIPPING",
    foottophead: "INTERNATIONAL",
  },
  {
    foottoplogo: "./Images/Illustration/ft.2.png",
    foottopp: "24 HOURS HELPLINE",
    foottophead: "123 456 789",
  },
  {
    foottoplogo: "./Images/Illustration/ft.3.png",
    foottopp: "SEE OUR",
    foottophead: "LATEST OFFERS",
  },
];

const fb1head = "ABOUT FURNITURE HOUSE";
const fb1para =
  "We provide the best Quality of products to you.We are always here to help our lovely customers.";

const fb2head="INFORMATION";
const fb2content=[
    {fb2para:"About Us"},
    {fb2para:"Services"},
    {fb2para:"Blog"},
    {fb2para:"Careers"},
    {fb2para:"Top Brands"}
]

const fb3head="TOP BRANDS";
const fb3content=[
    {fb3para:"Benicia Bed"},
    {fb3para:"Foundry"},
    {fb3para:"BorkHolder"},
    {fb3para:"Burton james"},
    {fb3para:"Copeland"}
]
const fb4head="SUBSCRIBE TO OUR LATEST NEWS";
const fb4email="EMAIL ADDRESS";
const fb4button="SUBSCRIBE";



const Footer = () => {
  return (
    <section className="container-fluid footback">
      <section className="container pb-5">
        <div className="row">
          {foottop.map((foottop, index) => (
            <div key={index} className="col-lg-4 sideway">
              <div>
                <img src={foottop.foottoplogo} alt="" className="truck" />
              </div>
              <div>
                <p className="text-light">{foottop.foottopp}</p>
                <h3 className="text-light">{foottop.foottophead}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="footslash"></div>
        <div className="row">
            <div className="col-md-6 col-lg-3">
                <h4 className="text-light mt-5">{fb1head}</h4>
                <p className="text-light">{fb1para}</p>
                <div className="d-flex media">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-dribbble"></i>
                <i className="bi bi-google"></i>
                
                </div>
            </div>
            <div className="col-md-6 col-lg-3 two">
                <h4 className="text-light mt-5 mb-3 ">{fb2head}</h4>
                {fb2content.map((fb2content,index)=>(
                    <li key={index} className="text-light information">{fb2content.fb2para}</li>
                ))}
            </div>
            <div className="col-md-6 col-lg-3 three">
                <h4 className="text-light mt-5">{fb3head}</h4>
                {fb3content.map((fb3content,index)=>(
                    <li key={index} className="text-light">{fb3content.fb3para}</li>
                ))}
            </div>
            <div className="col-md-6 col-lg-3">
                <h4 className="text-light mt-5 ">{fb4head}</h4>
                <p className="text-light small p-2 mt-4 email"><i className="bi bi-envelop">{fb4email}</i></p>
                <button className="sub">{fb4button}</button>
            </div>
        </div>
      </section>
    </section>
  );
};
export default Footer;
