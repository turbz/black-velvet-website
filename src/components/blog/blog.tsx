import React from "react"

export default function blog() {
  return (
    <section>
      <div className="blog-cover">
        <div>
          <h2>Updates & Resources</h2>
          <p>Keeping you equiped & informed</p>
        </div>
      </div>
      <div className="updates">
        <div className="cardlist">
          <div className="card">
            <figure
              style={{
                backgroundImage: `url(https://static.wixstatic.com/media/0589ca_0a2fa82da9ce43ae9f841bd27ed73882~mv2.png/v1/fill/w_372,h_263,al_c,lg_1,q_85,enc_auto/energy%20efficiency%20rating.png)`,
              }}
            ></figure>
            <div>
              <h2>Energy Performance Certificates (EPCs)</h2>
              <h4>June 2022</h4>
            </div>
          </div>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
