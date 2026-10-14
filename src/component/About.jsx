import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <img
            src={`${import.meta.env.BASE_URL}Images/Illustration/o1.png`}
            alt="Furniture shopping at Furniture House"
            className="img-fluid rounded  aboutimg"
          />
        </div>

        <div className="col-lg-6">
          <p className="text-success fw-semibold mb-2">
            ABOUT FURNITURE HOUSE
          </p>

          <h1 className="fw-bold mb-3">
            Making Your House Feel Like Home
          </h1>

          <p className="text-secondary">
            Welcome to Furniture House, your destination for stylish and
            comfortable furniture. We believe that every home deserves
            beautiful furniture that combines design, quality, and
            functionality.
          </p>

          <p className="text-secondary">
            From cozy living room essentials to elegant bedroom furniture,
            our collection helps you create spaces that reflect your
            personality and lifestyle.
          </p>

          <div className="row mt-4 g-3">
            <div className="col-6">
              <h3 className="fw-bold text-success">Quality</h3>
              <p className="text-secondary">Furniture made for everyday living.</p>
            </div>

            <div className="col-6">
              <h3 className="fw-bold text-success">Comfort</h3>
              <p className="text-secondary">Designed for your comfort and style.</p>
            </div>
          </div>

         <a href="/Product" className="btn btn-success mt-3">
            Explore Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;