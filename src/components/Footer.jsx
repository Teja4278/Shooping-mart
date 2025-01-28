import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-light py-5">
      <div className="container2">
        <div className="row">
          {/* Mart Section */}
          <div className="col-md-3 ">
            <h5 className="text-uppercase fw-bold d-flex align-items-center">
              <FaShoppingBag className="me-2 ms-5" /> Mart
            </h5>
            <p
              className="text-white text-justify"
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                marginTop: "1rem",
                marginLeft:"50px"
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </div>

          {/* About Us Section */}
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold">About Us</h5>
            <ul className="list-unstyled mt-3 ">
              <li><a href="#" className="text-white text-decoration-none text-white">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none text-white">Our Stores</a></li>
              <li><a href="#" className="text-white text-decoration-none text-white">Our Cares</a></li>
              <li><a href="#" className="text-white text-decoration-none text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-white text-decoration-none text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold">Customer Care</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="#" className="text-white text-decoration-none ">Help Center</a></li>
              <li><a href="#" className="text-white text-decoration-none ">How to Buy</a></li>
              <li><a href="#" className="text-white text-decoration-none ">Track Your Order</a></li>
              <li><a href="#" className="text-white text-decoration-none ">Corporate & Bulk Purchasing</a></li>
              <li><a href="#" className="text-white text-decoration-none ">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p className="text-white mt-3">
              70 Washington Square South,<br />
              New York, NY 10012, United States
            </p>
            <p className="text-white mb-1">
              <strong>Email:</strong> example@gmail.com
            </p>
            <p className="text-white mb-0">
              <strong>Phone:</strong> +1 1123 456 780
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
