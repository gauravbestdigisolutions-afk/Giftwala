import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left: Image */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src="https://www.printvenue.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542744173-8e7e53415bb0%3Fq%3D80%26w%3D2070%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=2048&q=75"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right: Text */}
        <div className="col-12 col-md-6">
          <h2 className="fw-bold mb-3">About Our Company</h2>
          <p className="mb-3">
            Welcome to MyShop! We provide the best products with top-notch quality
            and excellent customer service. Our mission is to bring joy and convenience
            to our customers by offering a wide range of products at affordable prices.
          </p>
          <p className="mb-3">
            From greeting cards to personalized gifts, we ensure each product meets
            your expectations. Experience a seamless shopping journey with us!
          </p>
          <a href="/about" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
