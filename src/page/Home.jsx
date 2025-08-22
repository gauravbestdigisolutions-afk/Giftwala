import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import About from "./About";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const products = [
    { title: "Notebook", price: "₹29.99", img: "https://www.printvenue.com/_next/image?url=https%3A%2F%2Fprintvenue-templates.s3.ap-south-1.amazonaws.com%2Fstatic%2Fproduct%2F5xn6tmw~product-preview-l-1~512dfff0e45253.23389616%3Fresponse-content-disposition%3Dinline%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20250822T092152Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D7199%26X-Amz-Credential%3DAKIA6GBMH3LDJYCFJTNP%252F20250822%252Fap-south-1%252Fs3%252Faws4_request%26X-Amz-Signature%3Dc6300c7ff608956d6b36e0360076afee6ed08938afab54d357239116970cd686&w=1920&q=75" },
    { title: "Parker Classic Stainless Steel Ct - Ball Pen", price: "₹39.99", img: "https://www.printvenue.com/_next/image?url=https%3A%2F%2Fprintvenue-templates.s3.ap-south-1.amazonaws.com%2Fstatic%2Fproduct%2F177nltks~product-preview-l-1~5c8cca81c20147.96206513%3Fresponse-content-disposition%3Dinline%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20250822T092152Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D7200%26X-Amz-Credential%3DAKIA6GBMH3LDJYCFJTNP%252F20250822%252Fap-south-1%252Fs3%252Faws4_request%26X-Amz-Signature%3De72ea7e1244eeacbd037441b781500593d6f1d15fd56693f675165e01e51ebe3&w=1920&q=75" },
    { title: "Embroidered Cap - Black", price: "₹19.99", img: "https://www.printvenue.com/_next/image?url=https%3A%2F%2Fprintvenue-templates.s3.ap-south-1.amazonaws.com%2Fstatic%2Fproduct%2Frywo82t~product-preview-l-1~5811ceebb87420.46253043%3Fresponse-content-disposition%3Dinline%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20250822T092152Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D7200%26X-Amz-Credential%3DAKIA6GBMH3LDJYCFJTNP%252F20250822%252Fap-south-1%252Fs3%252Faws4_request%26X-Amz-Signature%3De518350c667a51c6d9227e65bcd3873b906cc107aea727b3ef52cce6a24fe1c0&w=1920&q=75" },
    { title: "Whit Formal shirt", price: "₹49.99", img: "https://www.printvenue.com/_next/image?url=https%3A%2F%2Fprintvenue-templates.s3.ap-south-1.amazonaws.com%2Fstatic%2Fproduct%2Fg2c4ibi~product-preview-l-1~65fcd094eb4e44.17481286%3Fresponse-content-disposition%3Dinline%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20250822T092152Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D7200%26X-Amz-Credential%3DAKIA6GBMH3LDJYCFJTNP%252F20250822%252Fap-south-1%252Fs3%252Faws4_request%26X-Amz-Signature%3Db924ca38a32aeb4e8df9e086c516ef426810ab911cd4fed2f14ffeb6222004f6&w=1920&q=75" },
    { title: "Product 5", price: "₹59.99", img: "https://www.printvenue.com/_next/image?url=https%3A%2F%2Fprintvenue-templates.s3.ap-south-1.amazonaws.com%2Fstatic%2Fproduct%2Fhyjfx9e~product-preview-l-1~5138850c817883.53515400%3Fresponse-content-disposition%3Dinline%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20250822T092152Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D7200%26X-Amz-Credential%3DAKIA6GBMH3LDJYCFJTNP%252F20250822%252Fap-south-1%252Fs3%252Faws4_request%26X-Amz-Signature%3Daa1817f1e69f6d16f78fc88e8c183ac7f73422340ab07388e67f0112e8d13e46&w=1920&q=75" },
    { title: "Product 6", price: "₹24.99", img: "https://www.printvenue.com/_next/image?url=https%3A%2F%2Fprintvenue-templates.s3.ap-south-1.amazonaws.com%2Fstatic%2Fproduct%2Fyvyf1q5~product-preview-l-1~54ead256df1eb8.87243543%3Fresponse-content-disposition%3Dinline%26X-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Date%3D20250822T092152Z%26X-Amz-SignedHeaders%3Dhost%26X-Amz-Expires%3D7200%26X-Amz-Credential%3DAKIA6GBMH3LDJYCFJTNP%252F20250822%252Fap-south-1%252Fs3%252Faws4_request%26X-Amz-Signature%3Db0367b21a0dd65189721c881b994b88908b026129cf61f21cafcc42cefa4314b&w=1920&q=75" },
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
   <HeroSection/>
    <div className="container my-5">
      {/* Info Section above Popular Products */}
     <div className="d-flex justify-content-center flex-wrap text-center mb-5 gap-4">
  <div className="card" style={{ width: "250px" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-9FAwrEd4I0XsQDUBwEuLGJYkRqqPuJeWw&s"
      alt=""
      className="card-img-top"
      style={{ height: "150px", objectFit: "cover" }}
    />
    <div className="card-body">
      <h5 className="fw-bold">Speed</h5>
      <p>Same day, next day and 3 hours rush printing. Specialities in 3 days</p>
    </div>
  </div>

  <div className="card" style={{ width: "250px" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj66I-fg4rYND4HtCPsVri46fhPsC4xPUv-w&s"
      alt=""
      className="card-img-top"
      style={{ height: "150px", objectFit: "cover" }}
    />
    <div className="card-body">
      <h5 className="fw-bold">Luxury</h5>
      <p>Mix and match gorgeous oil color or white ink painting with a variety of paper options.</p>
    </div>
  </div>

  <div className="card" style={{ width: "250px" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5JyyhzGbaBUFveJspG8sVP4NFrcEfEgsOw&s"
      alt=""
      className="card-img-top"
      style={{ height: "150px", objectFit: "cover" }}
    />
    <div className="card-body">
      <h5 className="fw-bold">Guaranteed Satisfaction</h5>
      <p>Print your heart out with confidence. We got you, pinky promise.</p>
    </div>
  </div>
</div>


      {/* Popular Products Section */}
      <h2 className="mb-4 fw-bold text-center">Popular Products</h2>

      <div className="position-relative">
        {/* Left Arrow */}
        <button
          className="btn position-absolute top-50 start-0 translate-middle-y"
          style={{ zIndex: 10, backgroundColor: "#ff6b6b", color: "#fff", border: "none" }}
          onClick={() => scroll("left")}
          
        >
          &#8249;
        </button>

        {/* Right Arrow */}
        <button
          className="btn position-absolute top-50 end-0 translate-middle-y"
          style={{ zIndex: 10, backgroundColor: "#ff6b6b", color: "#fff", border: "none" }}
          onClick={() => scroll("right")}
        >
          &#8250;
        </button>

        {/* Horizontal Scrollable Products */}
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

export default Home;
