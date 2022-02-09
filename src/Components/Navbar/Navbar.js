import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);
  return (
    <div>
      <div className="header-nav">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src="" alt="logo" />
          </Link>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <i
                class="fas fa-times"
                size={30}
                style={{ color: "#ffffff" }}
              ></i>
            ) : (
              <i class="fas fa-bars" size={30} style={{ color: "#ffffff" }}></i>
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="features"
                
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
