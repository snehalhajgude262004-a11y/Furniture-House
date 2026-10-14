import React from "react";
import "./Featured.css";

const featuredheading = "FEATURED PRODUCTS";
const featuredheading2 = "KNOW MORE ABOUT OUR LATEST COLLECTION";
const featuredcontent = [
  {
    featuredimg: "./Images/Illustration/f1.png",
    featuredhead: "COLORFUL SOFA",
    Featuredadd: "ADD TO CART",
  },
  {
    featuredimg: "./Images/Illustration/f2.png",
    featuredhead: "DINNING TABLE",
    Featuredadd: "ADD TO CART",
  },
  {
    featuredimg: "./Images/Illustration/f3.png",
    featuredhead: "WOW SOFA COLLECTION",
    Featuredadd: "ADD TO CART",
  },
  {
    featuredimg: "./Images/Illustration/f4.png",
    featuredhead: "BED COLLECTION",
    Featuredadd: "ADD TO CART",
  },
];

const Featured = () => {
  return (
    <section className="container">
      <h3 className="text-center mt-5">{featuredheading}</h3>
      <div className="hr"></div>
      <p className="text-center mt-2 mb-5">{featuredheading2}</p>
      <div className="row">
        {featuredcontent.map((featuredcontent, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <figure className="feature">
              <img src={featuredcontent.featuredimg} key={index} alt="" />
              <figcaption>
                <h5 className="text-center pb-2 mt-3">
                  {featuredcontent.featuredhead}
                </h5>
                <a href="">{featuredcontent.Featuredadd}</a>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
