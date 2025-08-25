import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Apple iPhone 15', price: 79999, quantity: 1 },
    { id: 2, name: 'Samsung Galaxy S24', price: 69999, quantity: 2 },
  ]);

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">
          {cartItems.map(item => (
            <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <div className="d-flex align-items-center mb-2">
                    <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-outline-secondary btn-sm ms-2" onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="col-12 mt-4">
            <h4>Total: ₹{getTotal()}</h4>
            <button className="btn btn-success">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
