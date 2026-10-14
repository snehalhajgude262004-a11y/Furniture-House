import React from "react";
import "./Product.css/";


const products = [
  {
    name: "Modern Sofa",
    category: "Living Room",
    price: "$450",
   image: `${import.meta.env.BASE_URL}Images/Illustration/h1.png`,
  },
  {
    name: "Elegant Armchair",
    category: "Living Room",
    price: "$280",
    image: `${import.meta.env.BASE_URL}Images/Illustration/h2.png`,
  },
  {
    name: "Classic Furniture",
    category: "Home Furniture",
    price: "$350",
    image: `${import.meta.env.BASE_URL}Images/Illustration/h3.png`,
  },
  {
    name: "Designer Chair",
    category: "Living Room",
    price: "$220",
    image: `${import.meta.env.BASE_URL}Images/Illustration/h4.png`,
  },
  {
    name: "Modern Home Decor",
    category: "Home Decor",
    price: "$180",
    image: `${import.meta.env.BASE_URL}Images/Illustration/h5.png`,
  },
  {
    name: "Premium Furniture",
    category: "Home Furniture",
    price: "$520",
    image: `${import.meta.env.BASE_URL}Images/Illustration/h6.png`,
  }
];

const Product = () => {
  return (
    <section className="container py-5  ">
      <div className="text-center mb-5">
        <p className="text-success fw-semibold mb-2">
          FURNITURE HOUSE COLLECTION
        </p>
        <h1 className="fw-bold">Our Products</h1>
        <p className="text-secondary">
          Discover stylish furniture designed to make your home comfortable
          and beautiful.
        </p>
      </div>

      <div className="row g-4 ">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.name}>
            <div className="card h-100 border-0 shadow-sm">
              <div
                className="bg-light d-flex align-items-center justify-content-center p-3"
                style={{ height: "260px" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid product"
                  onError={(e) => {
                    e.currentTarget.style.visibility = "hidden";
                  }}
                />
              </div>

              <div className="card-body text-center">
                <p className="text-secondary small mb-1">
                  {product.category}
                </p>
                <h5 className="card-title fw-semibold">{product.name}</h5>
                <p className="text-success fw-bold fs-5 mb-3">
                  {product.price}
                </p>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() =>
                    window.alert(`${product.name} selected`)
                  }
                >
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;