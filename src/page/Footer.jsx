import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img22 from "../assets/image/giftbala.png"

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-12 col-md-3 mb-4">
            <img src={img22} alt="" style={{
              width:'50%',
              filter: "invert(1) brightness(2)"
            }} />
           
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
            <p>Email: Info@giftwalah.com</p>
            <p>Phone: +91  9999368393</p>
            <p>Adress HOUSE NO-23,GROUND FLOOR HOUSING BOARD COLONY SECTOR 18 FARIDABAD</p>
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
