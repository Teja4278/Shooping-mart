import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <h1>{product.productName}</h1>
      <img src={product.imgUrl} alt={product.productName} style={{ width: "100%" }} />
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
