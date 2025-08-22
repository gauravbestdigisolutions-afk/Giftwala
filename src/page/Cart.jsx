import React, { useState } from "react";

const Cart = () => {
  // Sample cart products
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Notebook", price: 29.99, quantity: 1, img: "https://via.placeholder.com/100" },
    { id: 2, title: "Parker Ball Pen", price: 39.99, quantity: 2, img: "https://via.placeholder.com/100" },
    { id: 3, title: "Embroidered Cap", price: 19.99, quantity: 1, img: "https://via.placeholder.com/100" },
  ]);

  // Increase quantity
  const increaseQty = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container my-5">
      <h2 className="mb-4 fw-bold text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cartItems.map(item => (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-md-3">
                    <img src={item.img} className="img-fluid rounded-start" alt={item.title} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text text-primary fw-bold">${item.price}</p>
                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQty(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => increaseQty(item.id)}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 text-center">
                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm p-3">
              <h5 className="fw-bold">Cart Summary</h5>
              <hr />
              <p>Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
              <p className="text-primary fw-bold fs-5">Total Price: ${total}</p>
              <button className="btn btn-success w-100">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
