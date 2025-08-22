import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import img22 from "../assets/image/giftbala.png"
import Line from "../page/Line";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm px-3 sticky-top d-none d-md-flex">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left: Logo */}
          <a className="navbar-brand fw-bold text-primary" href="/">
            <img src={img22} alt="" style={{
               width:"140px",
            }}/>
          </a>

          {/* Center: Search */}
          <form className="w-50">
            <div className="input-group rounded-pill border overflow-hidden w-100">
              <span className="input-group-text bg-white border-0">
                <AiOutlineSearch className="text-muted" size={20} />
              </span>
              <input
                type="search"
                className="form-control border-0"
                placeholder="Search..."
              />
              <button
                className="btn btn-primary px-4 rounded-end-pill"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>

          {/* Right: Login + Cart */}
          <ul className="navbar-nav flex-row gap-3 align-items-center mb-0">
            <li className="nav-item">
              <Link to="/login" className="nav-link text-dark fw-semibold">
                Login
              </Link>
            </li>
            <li className="nav-item position-relative">
              <a className="nav-link text-dark" href="/cart">
                <FaShoppingCart size={22} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm px-3 sticky-top d-md-none">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <a className="navbar-brand fw-bold text-primary" href="/">
            MyShop
          </a>

          {/* Toggle Button */}
          <button
            className="btn border-0"
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`position-fixed top-0 start-0 h-100 bg-white shadow p-4 d-md-none`}
        style={{
          width: "250px",
          zIndex: 1050,
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* Close Button */}
        <button className="btn-close mb-4" onClick={() => setOpen(false)}></button>

        {/* Search */}
        <form className="mb-3">
          <div className="input-group rounded-pill border overflow-hidden w-100">
            <span className="input-group-text bg-white border-0">
              <AiOutlineSearch className="text-muted" size={20} />
            </span>
            <input
              type="search"
              className="form-control border-0"
              placeholder="Search..."
            />
            <button
              className="btn btn-primary px-4 rounded-end-pill"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>

        {/* Menu Links */}
        <ul className="navbar-nav flex-column gap-3">
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-link text-dark fw-semibold"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </li>
          <li className="nav-item position-relative">
            <a
              href="/cart"
              className="nav-link text-dark d-flex align-items-center"
              onClick={() => setOpen(false)}
            >
              <FaShoppingCart size={22} className="me-2" />
              Cart (2)
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-md-none"
          style={{ zIndex: 1040 }}
          onClick={() => setOpen(false)}
        ></div>
      )}
      <Line/>
    </div>
  );
};

export default Navbar;
