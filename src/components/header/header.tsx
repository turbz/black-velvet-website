import React, { useState } from "react";
import {
  FaBars,
  FaCross,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./header.css";
import { Link } from "gatsby";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="main-header">
      <div className="wrapper">
        <div className="site-branding">
          <h1>Black Velvet Civils (Pty) Ltd</h1>
        </div>
        <nav className={`${!toggle ? "inactive" : "active"}`}>
          <div onClick={() => setToggle(!toggle)} className="toggle-icon">
            {/* {!toggle ? <FaBars /> : <FaCross />} */}
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            style={{
              display: !toggle ? "none" : "inline-block",
            }}
            className="navigation"
          >
            <ul className="main-nav">
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/clients">
                  Clients
                </Link>
              </li>
              <li>
                <Link onClick={() => setToggle(!toggle)} to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <a onClick={() => setToggle(!toggle)} href="#">
                  Resources and Tips
                </a>
              </li>
              <li>
                <a onClick={() => setToggle(!toggle)} href="#">
                  Book Online
                </a>
              </li>
            </ul>
            <ul className="social-media">
              <li>
                <a
                  href="https://www.instagram.com/blackvelvet_pty/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <Link to="#">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
