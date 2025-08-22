import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3 sticky-top">
        <div className="container-fluid">
          {/* Left: Logo */}
          <a className="navbar-brand fw-bold text-primary" href="/">
            MyShop
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center + Right */}
          <div className="collapse navbar-collapse" id="navbarContent">
            {/* Center: Search */}
            <form className="d-flex mx-auto my-2 my-lg-0 w-50">
              <div className="input-group rounded-pill border overflow-hidden w-100">
                <span className="input-group-text bg-white border-0">
                  <AiOutlineSearch className="text-muted" size={20} />
                </span>
                <input
                  type="search"
                  className="form-control border-0"
                  placeholder="Search products..."
                  aria-label="Search"
                />
                <button
                  className="btn btn-primary px-4 rounded-end-pill"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Right: Actions */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
              <li className="nav-item">
                <Link to='/login' className="nav-link text-dark fw-semibold" href="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-semibold" href="/track">
                  Track
                </a>
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
        </div>
      </nav>

      {/* Bottom Category Bar */}
      <div className="bg-light shadow-sm py-2">
        <div className="container d-flex flex-wrap gap-3 overflow-auto">

          {/* Greeting Cards Dropdown */}
          <div className="dropdown hover-dropdown">
            <span className="text-primary fw-semibold" style={{ cursor: "pointer" }}>
              Greeting Cards
            </span>
            <div className="dropdown-menu p-3 shadow border-0">
              <div>Birthday Cards</div>
              <div>Anniversary Cards</div>
              <div>Thank You Cards</div>
            </div>
          </div>

          {/* Invitations Dropdown */}
          <div className="dropdown hover-dropdown">
            <span className="text-primary fw-semibold" style={{ cursor: "pointer" }}>
              Invitations
            </span>
            <div className="dropdown-menu p-3 shadow border-0">
              <div>Wedding Invitations</div>
              <div>Birthday Invitations</div>
              <div>Party Invitations</div>
            </div>
          </div>

          {/* Other Categories without Dropdown */}
          <span className="text-primary fw-semibold">Calendars</span>
          <span className="text-primary fw-semibold">Posters</span>
          <span className="text-primary fw-semibold">Personalised Gifts</span>
          <span className="text-primary fw-semibold">Stationery</span>
          <span className="text-primary fw-semibold">Corporate Printing</span>

        </div>
      </div>
      
    </div>
  );
}
