import React, { useState } from "react"
import {
  FaBars,
  FaCross,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import "./header.css"
import { Link } from "gatsby"

const Header = () => {
  const [toggle, setToggle] = useState(false)
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
                <a onClick={() => setToggle(!toggle)} href="#">
                  Home
                </a>
              </li>
              <li>
                <a onClick={() => setToggle(!toggle)} href="#">
                  About
                </a>
              </li>
              <li>
                <a onClick={() => setToggle(!toggle)} href="#">
                  Services
                </a>
              </li>
              <li>
                <a onClick={() => setToggle(!toggle)} href="#">
                  Clients
                </a>
              </li>
              <li>
                <a onClick={() => setToggle(!toggle)} href="#">
                  Contact
                </a>
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
                <Link to="#">
                  <FaInstagram />
                </Link>
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
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
