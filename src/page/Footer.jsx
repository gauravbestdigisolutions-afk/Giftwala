import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">MyShop</h5>
            <p>
              Your one-stop shop for all your needs! Quality products, best deals, and excellent service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="/faq" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="/shipping" className="text-white text-decoration-none">Shipping & Returns</a></li>
              <li><a href="/support" className="text-white text-decoration-none">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-3 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@myshop.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: 123, Main Street, Delhi, India</p>
          </div>

        </div>

        <hr className="bg-white" />

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-white text-decoration-none">Facebook</a>
            <a href="#" className="text-white text-decoration-none">Instagram</a>
            <a href="#" className="text-white text-decoration-none">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
