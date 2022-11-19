import React from "react"

import "./contacts.css"

export default function Contacts() {
  return (
    <section className="Contacts">
      <div className="wrapper">
        <div className="address">
          <h2>Contact Us</h2>
          <h4>
            Wedgefield Office Park, The Regus Building, 17 Muswell Road South,
            Bryanston, 2021
          </h4>
          <h4>info@blackv.co.za</h4>
          <h4>0823873159</h4>
        </div>
        <form className="contact-form">
          <label>
            <span>
              Name <mark>*</mark>
            </span>
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            <span>Address</span>
            <input type="text" placeholder="Enter your address" />
          </label>
          <div>
            <label>
              <span>
                Email <mark>*</mark>
              </span>
              <input type="text" placeholder="Enter your emal" />
            </label>
            <label>
              <span>Phone</span>
              <input type="text" placeholder="Enter your phone number" />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input type="text" placeholder="Type the subject" />
          </label>
          <label>
            <span>Message</span>
            <textarea placeholder="Type your message here..." />
          </label>
        </form>
      </div>
      <figure></figure>

      <div className="earth3dmap-com">
        <iframe
          id="iframemap"
          src="https://maps.google.com/maps?q=Wedgefield+Office+Park%2C+The+Regus+Building%2C+17+Muswell+Road+South%2C+Bryanston%2C+2021&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="0"
        ></iframe>
        {/* <div>
          Map by
          <a
            style={{
              color: "#333",
              textDecoration: "underline",
              fontSize: "14px",
              fontFamily: " Arial, Helvetica, sans-serif",
              textAlign: "right",
            }}
            href="http://earth3dmap.com/?from=embed"
            target="_blank"
          >
            Earth3DMap.com
          </a>
        </div> */}
      </div>
    </section>
  )
}
