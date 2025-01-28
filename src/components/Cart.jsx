import React from "react";

const CartPage = ({ cart, setCart }) => {
  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, idx) => idx !== index);
    setCart(updatedCart);
  };

  // Function to increase the quantity of an item
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 0) + 1; // Ensure quantity is always a number
    setCart(updatedCart);
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  // Function to calculate the total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0; // Ensure price is a valid number
      const quantity = parseInt(item.quantity, 10) || 0; // Ensure quantity is a valid number
      return total + price * (quantity +1);
    }, 0);
  };
  

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row justify-content-center">
          <div
            className="d-flex flex-column position-absolute bg-light p-4 shadow rounded"
            style={{
              top: "100px",
              left: "70px",
              width: "300px",
              maxHeight: "600px",
              overflowY: "auto",
              zIndex: 1000,
            }}
          >
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="card mb-3 shadow d-flex flex-column"
                style={{ flexDirection: "column" }}
              >
                <button
                  className="btn btn-danger position-absolute top-0 end-0 m-2"
                  onClick={() => removeFromCart(idx)}
                >
                  X
                </button>
                <img
                  src={item.imgUrl}
                  alt={item.productName}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "150px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.productName}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => decreaseQuantity(idx)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => increaseQuantity(idx)}
                      >
                        +
                      </button>
                    </div>
                    <p className="mb-0">
                    Total: ${(parseFloat(item.price || 0) * parseInt(item.quantity || 0, 10)).toFixed(2)}

                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Order Summary */}
      <div
        className="bg-dark text-white shadow p-4 rounded position-fixed"
        style={{
          top: "100px",
          right: "70px",
          width: "350px",
          height: "auto",
          zIndex: 1000,
        }}
      >
        <h4 className="mb-3">Order Summary</h4>
        <p className="mb-1">Total Items: {cart.length}</p>
        <p className="h5">Total Price: ${getTotalPrice().toFixed(2)}</p>
        <button className="btn btn-primary mt-3 w-100">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
