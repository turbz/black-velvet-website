import React from "react"

import "./partners.css"

export default function Partners() {
  const services = [
    {
      title: "Ceramic Industries",
      description: "Tiles and Sanitaryware manufacturing",
      image:
        "https://static.wixstatic.com/media/0589ca_d005ece55c95415090a9b13b7d5b8ee2~mv2.jpg/v1/fill/w_220,h_145,al_c,lg_1,q_80,enc_auto/ceramic%20industries.jpg",
      link: "/ceremic-industries",
    },
    {
      title: "Aquarella Investments",
      description: "Clay and kaolin mining",
      image:
        "https://static.wixstatic.com/media/0589ca_a61a76259ad0439d912de34d5daa3a1e~mv2.jpg/v1/fill/w_220,h_220,al_c,lg_1,q_80,enc_auto/Aquarella.jpg",
      link: "/aquarella-investments",
    },
    {
      title: "Corobrik",
      description: "Clay mining and brick manufacturing",
      image:
        "https://static.wixstatic.com/media/0589ca_fcad310a5cac4b668044bde4796c7e24~mv2.png/v1/fill/w_220,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/corobrik.png",
      link: "/corobrik",
    },
    {
      title: "Mispon Green Building Consulting",
      description: "Professional green building services",
      image:
        "https://static.wixstatic.com/media/0589ca_3d5cd9aa3e7146c9a588bc64f4260687~mv2.png/v1/fill/w_220,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Misplon.png",
      link: "/mispon-green-building-consulting",
    },
    {
      title: "Growthpoint Properties",
      description: "Real Estate Investment Trust Company",
      image:
        "https://static.wixstatic.com/media/0589ca_cfd45bdb80ac4aac8c89d60f6e796e5f~mv2.png/v1/fill/w_220,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Growthpoint.png",
      link: "/growthpoint-properties",
    },
  ]

  return (
    <section className="Partners">
      <hgroup>
        <h2>Value Partners</h2>
        <h5>Partnerships and Projects</h5>
      </hgroup>
      <div className="cardlist">
        {services.map(d => (
          <div className="card">
            <figure>
              <img src={d.image} alt={d.title} />
            </figure>
            <div>
              <hgroup>
                <h3>{d.title}</h3>
                <h4>{d.description}</h4>
              </hgroup>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
