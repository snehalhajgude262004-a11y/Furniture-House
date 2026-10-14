import React from "react";
import "./Customers.css";

const customerheading="SOME WORDS FROM OUR CUSTOMERS";
const customerhead="WE SATISFIED MORE THAN 700 CUSTOMERS";
const customerimage="./Images/Illustration/customer.png";
const mobileimage="./Images/Illustration/customer m.png";
const whiteh1="DWANYE JOHNSON";
const whitep="HAPPY CUSTOMER";
const whitecontent="FurnitureHouse is really excellent site for furnitures. I am very happy with the FurnitureHouse products and dedicated services from them. FurnitureHouse is really excellent site for furnitures. "


const Customers=()=>{
    return(
        <section className="container-fluid back">
            <section className="container">
                <h3 className="text-center pt-5 fs-5">{customerheading}</h3>
                <p className="text-center small">{customerhead}</p>
                <img src={customerimage} alt="" className="ss d-none d-md-block"  />
                <img src={mobileimage} alt="" className="d-md-none d-lg-none pad"/>
                <div className="white">
                    <h5 className="text-center text-success">{whiteh1}</h5>
                    <p className="text-center">{whitep}</p>
                    <p className="text-center pb-2">{whitecontent}</p>
                </div>
            </section>
        </section>
    )
}
export default Customers;