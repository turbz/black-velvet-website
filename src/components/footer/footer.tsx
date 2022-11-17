import React from "react"

import "./footer.css"
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"
import { Link } from "gatsby"
import moment from "moment"

export default function Footer() {
  return (
    <footer className="App-footer">
      <div>
        <h4>About</h4>
        <p>
          Black Velvet is a woman-owned environmental consulting firm offering
          services to the public and private sector in the mining, manufacturing
          and property industry.
        </p>
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
      <div>
        <h4>Links</h4>
        <ul>
          <li>
            <a href="#about">
              <FaAngleRight /> <span>About us</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <FaAngleRight /> <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FaAngleRight /> <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#team">
              <FaAngleRight /> <span>Team</span>
            </a>
          </li>
          <li>
            <a href="#clients">
              <FaAngleRight /> <span>Clients</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaAngleRight /> <span>Contact Us</span>
            </a>
          </li>
          <li>
            <a href="#tips">
              <FaAngleRight /> <span>Resouces & Tips</span>
            </a>
          </li>
          <li>
            <a href="#book">
              <FaAngleRight /> <span>Book Online </span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Services</h4>
        <ul>
          <li>
            <a href="#services">
              <FaAngleRight /> <span>Green building consulting</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FaAngleRight />{" "}
              <span>Development of Environmental Strategies</span>
            </a>
          </li>
          {/* <li><a href="#services"><img src={"arrowRight"} alt="icon" /> <span>Carpentry and Joinery</span></a></li> */}
          <li>
            <a href="#services">
              <FaAngleRight /> <span>Energy Performance Certificates</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FaAngleRight /> <span>Green building consulting</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FaAngleRight /> <span>Energy Water Performance</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FaAngleRight /> <span>Indoor Environmental Assessment</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <FaAngleRight /> <span>Civil Works</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4>Have a question?</h4>
        <ul>
          <li>
            <a href="#about">
              <FaAngleRight />{" "}
              <span>
                Wedgefield Office Park, The Regus Building, 17 Muswell Road
                South, Bryanston, 2021
              </span>
            </a>
          </li>
          <li>
            <a href="#phone">
              <FaAngleRight /> <span>+27 0823873159</span>
            </a>
          </li>
          <li>
            <a href="#email">
              <FaAngleRight /> <span>info@blackv.co.za</span>
            </a>
          </li>
        </ul>
      </div>
      <p>Copyright © {moment().format("YYYY")} All rights reserved</p>
    </footer>
  )
}
