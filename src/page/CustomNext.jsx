import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // ← for breadcrumb navigation
import img1 from "../assets/prodcut/image1.png";

const CustomNext = () => {
  const [quantity, setQuantity] = useState(1);
  const [coverOption, setCoverOption] = useState("Matching cover (+ ₹25)");
  const [pageOption, setPageOption] = useState("Unruled inside pages (+ ₹0)");

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="container my-5">
      {/* Breadcrumb / Home link */}
      <div className="mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Notebook
            </li>
          </ol>
        </nav>
      </div>

      <div className="row">
        {/* Left: Product Image */}
        <div className="col-12 col-md-6 mb-4">
          <img
            src={img1}
            alt="Notebook"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right: Product Info */}
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3">Notebook</h2>

          {/* Price */}
          <div className="mb-3">
            <span className="h4 text-primary fw-bold me-3">₹ 299</span>
            <span className="text-muted text-decoration-line-through me-2">₹ 350</span>
            <span className="text-danger fw-semibold">(15% Off)</span>
          </div>

          <p className="mb-1"><strong>The minimum quantity:</strong> 1</p>
          <p className="mb-3"><strong>0 bought this last month</strong></p>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-primary" onClick={handleDecrease}>-</button>
            <span className="mx-3">{quantity}</span>
            <button className="btn btn-outline-primary" onClick={handleIncrease}>+</button>
          </div>

          {/* Product Add-ons */}
          <div className="mb-3">
            <h5 className="fw-semibold">Product Add-on</h5>
            <div className="form-check">
              <input 
                type="radio" 
                name="cover" 
                value="Matching cover (+ ₹25)"
                checked={coverOption === "Matching cover (+ ₹25)"}
                onChange={(e) => setCoverOption(e.target.value)}
                className="form-check-input" 
                id="matchingCover"
              />
              <label className="form-check-label" htmlFor="matchingCover">Matching cover (+ ₹25)</label>
            </div>
            <div className="form-check">
              <input 
                type="radio" 
                name="cover" 
                value="Plain cover (+ ₹0)"
                checked={coverOption === "Plain cover (+ ₹0)"}
                onChange={(e) => setCoverOption(e.target.value)}
                className="form-check-input" 
                id="plainCover"
              />
              <label className="form-check-label" htmlFor="plainCover">Plain cover (+ ₹0)</label>
            </div>
            <div className="form-check">
              <input 
                type="radio" 
                name="cover" 
                value="Standard cover (+ ₹25)"
                checked={coverOption === "Standard cover (+ ₹25)"}
                onChange={(e) => setCoverOption(e.target.value)}
                className="form-check-input" 
                id="standardCover"
              />
              <label className="form-check-label" htmlFor="standardCover">Standard cover (+ ₹25)</label>
            </div>
          </div>

          <div className="mb-3">
            <h5 className="fw-semibold">Page Add-ons</h5>
            <div className="form-check">
              <input 
                type="radio" 
                name="pages" 
                value="Unruled inside pages (+ ₹0)"
                checked={pageOption === "Unruled inside pages (+ ₹0)"}
                onChange={(e) => setPageOption(e.target.value)}
                className="form-check-input" 
                id="unruledPages"
              />
              <label className="form-check-label" htmlFor="unruledPages">Unruled inside pages (+ ₹0)</label>
            </div>
            <div className="form-check">
              <input 
                type="radio" 
                name="pages" 
                value="Ruled inside pages (+ ₹26)"
                checked={pageOption === "Ruled inside pages (+ ₹26)"}
                onChange={(e) => setPageOption(e.target.value)}
                className="form-check-input" 
                id="ruledPages"
              />
              <label className="form-check-label" htmlFor="ruledPages">Ruled inside pages (+ ₹26)</label>
            </div>
          </div>

          <button className="btn btn-primary btn-lg mb-3">Customize Now</button>

          <div>
            <strong>Choose one from our design</strong>
            <div className="d-flex gap-3 mt-2">
              <div className="border p-3 rounded text-center">Design 1</div>
              <div className="border p-3 rounded text-center">Design 2</div>
              <div className="border p-3 rounded text-center">Design 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomNext;