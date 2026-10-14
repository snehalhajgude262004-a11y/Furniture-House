import React from "react";
import "./Our.css";

const ourheading="OUR FEATURED CATEGORIES";
const ourheading2="MAKE EASY SHOP WITH OUR CATEGORY";
const ourcontent=[
    {
        ourimg:"./Images/Illustration/o1.png",
        ourp:"CHAIRS AND SOFAS"
    },
    {
        ourimg:"./Images/Illustration/o2.png",
        ourp:"OUTSIDE FURNITURES"
    },
    {
        ourimg:"./Images/Illustration/o3.png",
        ourp:"BED & OFFICE FURNITURE"
    },
    {
        ourimg:"./Images/Illustration/o4.png",
        ourp:"DINING TABLE"
    }
]

const Our=()=>{
    return(
        <section className="container cate">
            <h3 className="text-center mt-5 mb-2">{ourheading}</h3>
            <div className="part"></div>
            <p className="text-center mb-5 mt-2">{ourheading2}</p>
            <div className="row">
                {ourcontent.map((ourcontent,index)=>(
                    <div key={index} className="col-12 col-md-6 col-lg-3">
                    <figure className="our">
                        <img src={ourcontent.ourimg} alt="" />
                        <figcaption>
                            <p className="text-center mt-3 fw-medium">{ourcontent.ourp}</p>
                        </figcaption>
                    </figure>
                </div>
                ))}
            </div>
        </section>
    )
}
export default Our;