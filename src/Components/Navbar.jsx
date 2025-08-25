import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import img22 from "../assets/image/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const categories = [
    { name: "Custom Printed T-Shirts", items: ["Electronic", "T-Shirt 2"] },
    { name: "Mugs", items: ["Mug 1", "Mug 2"] },
    { name: "Gift Items", items: ["Gift 1", "Gift 2"] },
    { name: "Notebooks", items: ["Notebook 1", "Notebook 2"] },
    { name: "Pens", items: ["Pen 1", "Pen 2"] },
    { name: "Embroidered Polos", items: ["Polo 1", "Polo 2"] },
    { name: "Office Products", items: ["Office 1", "Office 2"] },
    { name: "Corporate Gifts", items: ["Gift 1", "Gift 2"] },
  ];

  return (
    <div>
      {/* Top Navbar */}
      <nav className="navbar navbar-light bg-white shadow-sm px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src={img22} alt="Logo" style={{ width: "100px",color: "green", }} />
          </Link>

          <div className="d-flex align-items-center gap-3">
            <button className="btn d-lg-none">
              <AiOutlineSearch size={22} />
            </button>

            <form className="d-none d-lg-flex mx-auto" style={{ maxWidth: "800px", width: "100%" }}>
              <div className="input-group rounded-pill border overflow-hidden w-100" style={{ height: "55px", marginRight: "290px" }}>
                <span className="input-group-text bg-white border-0" style={{ fontSize: "20px" }}>
                  <AiOutlineSearch size={24} />
                </span>
                <input
                  type="search"
                  className="form-control border-0 fs-5"
                  placeholder="Search for products..."
                  style={{ padding: "10px 15px" }}
                />
                <button
                  type="submit"
                  className="btn px-4 d-flex align-items-center fs-6"
                  style={{ borderRadius: "0", backgroundColor: "black", color: "white" }}
                >
                  Search
                </button>
              </div>
            </form>

            <Link to="/login" className="text-dark">
              <FaUser style={{ cursor: "pointer", fontSize: "1.5rem" }} />
            </Link>

            <FaRegHeart size={20} />

            <div className="position-relative">
              <Link className="nav-link text-dark p-0" to="/cart">
                <FaShoppingCart size={22} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">2</span>
              </Link>
            </div>

            <button className="btn d-lg-none" onClick={() => setMenuOpen(true)}>
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Categories */}
      <nav className="navbar navbar-expand bg-primary d-none d-lg-block">
        <div className="container-fluid">
          <ul className="navbar-nav gap-4">
            {categories.map((cat, index) => (
              <li
                key={index}
                className="nav-item position-relative"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="btn text-white">{cat.name}</button>
                {openDropdown === index && (
                  <ul
                    className="dropdown-menu show"
                    style={{
                      display: "block",
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: "220px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    {cat.items.map((item, i) => (
                      <li key={i}>
                        {/* Link to /electronic/<item> */}
                        <Link className="dropdown-item" to={`/electronic/${item}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className="position-fixed top-0 start-0 bg-white h-100 shadow-lg p-3"
        style={{
          width: "260px",
          transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1050,
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <img src={img22} alt="Logo" style={{ width: "100px" }} />
          <button className="btn" onClick={() => setMenuOpen(false)}>
            <FaTimes size={22} />
          </button>
        </div>
        <ul className="list-unstyled">
          {categories.map((cat, index) => (
            <li key={index} className="mb-3">
              <strong>{cat.name}</strong>
              <ul className="list-unstyled ps-3">
                {cat.items.map((item, i) => (
                  <li key={i}>
                    <Link to={`/electronic/${item}`} className="text-dark text-decoration-none">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
          style={{ opacity: 0.5, zIndex: 1040 }}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
