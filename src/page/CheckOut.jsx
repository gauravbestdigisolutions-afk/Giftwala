import React, { useState, useEffect } from "react";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch cart items from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalPrice);
  }, []);

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    localStorage.removeItem("cart"); // Clear cart after order
    setCartItems([]);
    setTotal(0);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Checkout</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item._id} className="col-md-6 col-lg-4 mb-4">
                <div className="card h-100 shadow-sm">
                  {/* Product Image */}
                  {item.images && item.images[0] && (
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "contain", borderRadius: "10px" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: ₹{item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-end">
            <h4>Total: ₹{total}</h4>
            <button className="btn btn-success" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
