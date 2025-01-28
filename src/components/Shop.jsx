import React, { useState } from "react";
import Footer from './Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import wireless from "../Pages/Wireless";
import mobiles from "../Pages/Mobiles";
import sofas from "../Pages/Sofa";
import chairs from "../Pages/Chairs";
import watches from "../Pages/Watches";
import { FaStar } from "react-icons/fa";

const ShopPage = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  // Combine all products and ensure each has a category field
  const allProducts = [
    ...wireless.map((item) => ({ ...item, category: "wireless" })),
    ...mobiles.map((item) => ({ ...item, category: "mobiles" })),
    ...watches.map((item) => ({ ...item, category: "watches" })),
    ...chairs.map((item) => ({ ...item, category: "chairs" })),
    ...sofas.map((item) => ({ ...item, category: "sofas" })),
  ];

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setNotification(`${product.productName} added to cart!`);
    setTimeout(() => setNotification(""), 3000);
  };

  // Filter products based on category and search input
  const filteredProducts = allProducts.filter((product) => {
    return (
      (category === "" || product.category === category) &&
      product.productName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
    <div className="container py-5">
      <div className="bg-dark text-white text-center py-5 rounded mb-4">
        <h1 className="display-4">Shop Products</h1>
      </div>

      <div className="row mb-4">
        {/* <div className="col-md-4">
          <select
            className="form-select"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="wireless">Wireless</option>
            <option value="mobiles">Mobiles</option>
            <option value="watches">Watches</option>
            <option value="chairs">Chairs</option>
            <option value="sofas">Sofas</option>
          </select>
        </div> */}
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {notification && (
        <div className="alert alert-success text-center">{notification}</div>
      )}

      <div className="row justify-content-center g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="col-md-4 d-flex align-items-stretch"
            >
              <div className="card shadow position-relative w-100">
                <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1">
                  {product.discount}% OFF
                </div>
                <img
                  src={product.imgUrl}
                  alt={product.productName}
                  className="card-img-top"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="mb-2">
                    <span className="text-warning">
                      {[...Array(Math.round(product.avgRating))].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </span>{" "}
                    ({product.avgRating})
                  </p>
                  <p className="card-text">Price: ${product.price}</p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h4>No products found.</h4>
          </div>
        )}
      </div>
    </div>
    <Footer />  
    </div>
  );
};

export default ShopPage;
