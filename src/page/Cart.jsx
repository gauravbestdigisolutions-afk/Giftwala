import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate(); // useNavigate hook

  // Cart data localStorage se load karna
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Total price calculate karna
  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Quantity increase
  const increaseQty = (id) => {
    const updatedCart = cartItems.map(item =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Quantity decrease
  const decreaseQty = (id) => {
    const updatedCart = cartItems.map(item =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Navigate to checkout
  const handleCheckout = () => {
    navigate("/checkout-page");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div className="col-md-6 col-lg-4 mb-4" key={item._id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "contain", borderRadius: "10px" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <div className="d-flex align-items-center mb-2">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => decreaseQty(item._id)}
                    >-</button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => increaseQty(item._id)}
                    >+</button>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 mt-4">
            <h4>Total: ₹{getTotal()}</h4>
            <button className="btn btn-success" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
