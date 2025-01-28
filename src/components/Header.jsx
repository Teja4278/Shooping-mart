import React from "react";
import { Link } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="d-flex align-items-center justify-content-between px-5 py-2">
        {/* Logo Section */}
        <div className="d-flex align-items-center">
          <IoBag className="fs-4 me-2" />
          <h1 className="fs-5 mb-0">MART</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav gap-4 mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Shop" className="nav-link text-dark">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cart" className="nav-link text-dark">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Cart" className="nav-link text-dark">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
