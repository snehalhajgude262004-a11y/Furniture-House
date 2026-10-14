import React from "react";
import "./Brand.css";

const brandheading="OUR BRANDS";
const brandhead="CHOOSE BEST WITH OUR FAVOURITE BRANDS";
const brandcontent=[
    {
        brandimg:"./Images/Illustration/brand1.png"
    },
    {
        brandimg:"./Images/Illustration/brand2.png"
    },
    {
        brandimg:"Images/Illustration/brand3.png"
    },
    {
        brandimg:"Images/Illustration/brand4.png"
    },
    {
        brandimg:"./Images/Illustration/brand5.png"
    }
]

const Brand=()=>{
    return(
        <section>
            <section className="container">
                <h3 className="text-center mt-5">{brandheading}</h3>
                <div className="slash"></div>
                <p className="text-center mb-5 mt-2">{brandhead}</p>
                <div className="dekstop"> 
                    {brandcontent.map((brandcontent,index)=>(
                    <img key={index}src={brandcontent.brandimg} alt=""className="owner" />
                ))}
                </div>
            </section>
        </section>
    )
}
export default Brand;