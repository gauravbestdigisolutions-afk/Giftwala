import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/ProductContext"; // user context
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomNext = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { user } = useProductContext(); // get logged in user

  if (!product) return <p>No product selected!</p>;

  const [quantity, setQuantity] = useState(
    Number(localStorage.getItem(`quantity_${product._id}`)) || 1
  );
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState(product.images[0]);

  useEffect(() => {
    if (product) {
      const savedQty = Number(localStorage.getItem(`quantity_${product._id}`)) || 1;
      setQuantity(savedQty);
      setMainImage(product.images[0]);
    }

    const fetchRelatedProducts = async () => {
      try {
        const res = await fetch("https://gitbala-backend-2.onrender.com/api/products/product");
        const data = await res.json();
        const related = data.filter(
          (p) => p.category === product.category && p._id !== product._id
        );
        setRelatedProducts(related);
      } catch (err) {
        console.error("Error fetching related products:", err);
      }
    };
    fetchRelatedProducts();
  }, [product]);

  const handleIncrease = () => {
    setQuantity((prev) => {
      const newQty = prev + 1;
      localStorage.setItem(`quantity_${product._id}`, newQty);
      return newQty;
    });
  };

  const handleDecrease = () => {
    setQuantity((prev) => {
      const newQty = prev > 1 ? prev - 1 : 1;
      localStorage.setItem(`quantity_${product._id}`, newQty);
      return newQty;
    });
  };

  const handleAddToCart = () => {
    if (!user) {
      toast.warning("Please login first!", { position: "top-center" });
      navigate("/login"); // Redirect to login page
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item._id === product._id);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`${product.name} added to cart!`, { position: "top-center" });
    navigate("/cart"); // optional: go to cart page
  };

  const handleBuyRelated = (p) => {
    navigate("/customnext", { state: { product: p } });
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="container my-5">
      {/* Breadcrumb */}
      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
          </ol>
        </nav>
      </div>

      {/* Main Product */}
      <div className="row mb-5">
        <div className="col-12 col-md-6 mb-4">
          <img
            src={mainImage}
            alt={product.name}
            className="img-fluid rounded shadow mb-3"
            style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
          />
          <div className="d-flex gap-2">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="img-fluid rounded border"
                style={{
                  width: "22%",
                  height: "70px",
                  objectFit: "contain",
                  cursor: "pointer",
                  border: mainImage === img ? "2px solid #007bff" : "1px solid #ddd",
                }}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className="mb-3">{product.description || "No description available."}</p>
          <h4 className="text-primary fw-bold mb-3">₹{totalPrice}</h4>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-primary" onClick={handleDecrease}>-</button>
            <span className="mx-3">{quantity}</span>
            <button className="btn btn-outline-primary" onClick={handleIncrease}>+</button>
          </div>

          <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mb-5">
          <h4 className="fw-bold mb-3">Related Products</h4>
          <div className="d-flex gap-3 overflow-auto py-2" style={{ scrollBehavior: "smooth" }}>
            {relatedProducts.map((p) => (
              <div key={p._id} className="card flex-shrink-0 border-0 shadow-sm" style={{ width: "200px" }}>
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "contain", borderRadius: "10px" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{p.name}</h6>
                  <p className="text-primary fw-bold">₹{p.price}</p>
                  <button className="btn btn-sm btn-primary" onClick={() => handleBuyRelated(p)}>
                    View Product
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomNext;
