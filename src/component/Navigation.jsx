
import React, { useState } from "react";
import { Link } from "react-router";
import "./Navigation.css";

const Navlogo = "./Images/Illustration/logo.png";

const Navpage = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About" },
  { path: "/Product", label: "Product" },
  { path: "/Contact", label: "Contact" },
];

const NavBtn = "bi bi-list";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="container-fluid nav-bg">
      <div className="container first d-none d-lg-flex justify-content-between">
        <div className="logo">
          <Link to="/">
            <img src={Navlogo} alt="Furniture logo" className="pb-2" />
          </Link>
        </div>

        <div className="pt-2">
          <nav>
            <ul className="nav">
              {Navpage.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link className="nav-link" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="container d-lg-none">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={Navlogo} alt="Furniture logo" className="pb-2" />
          </Link>

          <button
            type="button"
            className="navBtn border-0 bg-transparent"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "bi bi-x-lg" : NavBtn}></i>
          </button>
        </div>

        {menuOpen && (
          <nav className="pb-3">
            <ul className="nav flex-column">
              {Navpage.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link
                    className="nav-link"
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default Navigation;
