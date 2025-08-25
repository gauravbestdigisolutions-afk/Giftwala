import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import About from "./About";
import HeroSection from "../Components/HeroSection";

// Import local images from assets
import img1 from "../assets/prodcut/image1.png";
import img2 from "../assets/prodcut/image2.png";
import img3 from "../assets/prodcut/image3.png";
import img4 from "../assets/prodcut/image4.png";
import img5 from "../assets/prodcut/image5.png";

const Electronic = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  // Local image-based product list
  const products = [
    { title: "Notebook", price: "₹29.99", img: img1 },
    { title: "Parker Classic Stainless Steel Ct - Ball Pen", price: "₹39.99", img: img2 },
    { title: "Embroidered Cap - Black", price: "₹19.99", img: img3 },
    { title: "White Formal Shirt", price: "₹49.99", img: img4 },
    { title: "Diary & Pen Combo", price: "₹59.99", img: img5 },
  ];

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleBuyNow = () => {
    navigate("/customnext");
  };

  return (
    <>
      <HeroSection />

      <div className="container my-5">
        <h2 className="mb-4 fw-bold text-center">Popular Products</h2>

        <div className="position-relative">
          {/* Left Scroll Button */}
          <button
            className="btn position-absolute top-50 start-0 translate-middle-y"
            style={{ zIndex: 10, backgroundColor: "#ff6b6b", color: "#fff", border: "none" }}
            onClick={() => scroll("left")}
          >
            &#8249;
          </button>

          {/* Right Scroll Button */}
          <button
            className="btn position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 10, backgroundColor: "#ff6b6b", color: "#fff", border: "none" }}
            onClick={() => scroll("right")}
          >
            &#8250;
          </button>

          {/* Scrollable Product Cards */}
          <div
            ref={scrollRef}
            className="d-flex gap-3 overflow-auto py-2"
            style={{
              scrollBehavior: "smooth",
              padding: "0 50px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Hide scrollbar for Chrome/Safari */}
            <style>
              {`
              div::-webkit-scrollbar {
                display: none;
              }
              `}
            </style>

            {products.map((product, index) => (
              <div key={index} className="card flex-shrink-0" style={{ width: "300px" }}>
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-primary fw-bold">{product.price}</p>
                  <button onClick={handleBuyNow} className="btn btn-primary">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <About />
      </div>
    </>
  );
};

export default Electronic;
