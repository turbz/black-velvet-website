import * as React from "react";

import "./banner.css";

export default function Banner() {
  return (
    <section id="home" className="main-banner">
      <div className="banner-content">
        <h2>Black Velvet Civils</h2>
        <h4>Environmental Consultancy</h4>
      </div>
      <figure className="bg-image">
        <img
          src="https://static.wixstatic.com/media/389edc41041f426ab69de13eecdc4d0a.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/389edc41041f426ab69de13eecdc4d0a.jpg"
          alt="bg-image"
        />
      </figure>
    </section>
  );
}
