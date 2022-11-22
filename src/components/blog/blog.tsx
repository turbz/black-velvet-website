import React from "react";
import "./blog.css";

export default function Blog() {
  return (
    <section id="blog" className="Blog">
      <div className="blog-cover">
        <div>
          <hgroup>
            <h2>Updates & Resources</h2>
            <p>Keeping you equiped & informed</p>
          </hgroup>
        </div>
      </div>
      <div className="updates">
        <div className="cardlist">
          <div className="card">
            <div>
              <hgroup>
                <h3>Energy Performance Certificates (EPCs)</h3>
                <h4>June 2022</h4>
              </hgroup>
            </div>
            <figure
              style={{
                backgroundImage: `url(https://static.wixstatic.com/media/0589ca_0a2fa82da9ce43ae9f841bd27ed73882~mv2.png/v1/fill/w_372,h_263,al_c,lg_1,q_85,enc_auto/energy%20efficiency%20rating.png)`,
              }}
            ></figure>
          </div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
