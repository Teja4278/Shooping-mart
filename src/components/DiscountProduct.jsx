import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import  discountProducts from "../Pages/Discountproduct";
import { useNavigate } from "react-router-dom";

const DiscountProduct = ({addToCart }) => {
  const handleImageClick = (product) => {
    // Redirect to the product details page, passing the product info
    navigate(`/product/${product.id}`, { state: { product } });
  };
  return (
  <div>
    <h1 className="mt-5">Big Discount</h1>
    <div className="container mt-5 pt-4">
      <div className="row justify-content-center">
        {discountProducts.map((item) => (
          <div
            key={item.id}
            className="col-md-3  d-flex align-items-stretch mb-4"
          >
            <div className="card shadow position-relative w-100">
              <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1">
                {item.discount}% OFF
              </div>
              <img
                src={item.imgUrl}
                alt={item.productName}
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
                onClick={() => handleImageClick(item)} // Navigate on click
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.productName}</h5>
                <p className="mb-2">
                  <span className="text-warning">
                    {[...Array(Math.round(item.avgRating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>{" "}
                  ({item.avgRating})
                </p>
                <p className="card-text">Price: ${item.price}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DiscountProduct;
