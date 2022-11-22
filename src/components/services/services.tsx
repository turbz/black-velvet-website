import React from "react";

import "./services.css";

export default function Services() {
  const services = [
    {
      title: "Environmental compliance auditing",
      description: "Management & auditing",
      image:
        "https://static.wixstatic.com/media/0589ca_2c8e10c2f2d24a5bb2c1d24970ff7e2a~mv2.jpg/v1/fill/w_363,h_363,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/0589ca_2c8e10c2f2d24a5bb2c1d24970ff7e2a~mv2.jpg",
      time: "30 min",
      link: "/environment-complience-audinting",
    },
    {
      title: "Development of Environmental Strategies",
      description: "How to align with the green agenda",
      image:
        "https://static.wixstatic.com/media/8f1ac17fdd3a4416ae16e1909f77f8e6.jpg/v1/fill/w_363,h_363,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/8f1ac17fdd3a4416ae16e1909f77f8e6.jpg",
      time: "30 min",
      link: "/development-environmental-strategies",
    },
    {
      title: "Energy Performance Certificates",
      description:
        "Eligibility assessment, Collecting & collating, Consumption assessment",
      image:
        "https://static.wixstatic.com/media/82c08d3efb804aa5a2af21ab98acde29.jpg/v1/fill/w_363,h_363,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/82c08d3efb804aa5a2af21ab98acde29.jpg",
      time: "30 min",
      link: "/energy-performance-certificates",
    },
    {
      title: "Green building consulting",
      description:
        "Building assessment, system development, training and certification",
      image:
        "https://static.wixstatic.com/media/11062b_36f549e59a6747f68a17eef908bc6c8e~mv2.jpg/v1/fill/w_363,h_363,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_36f549e59a6747f68a17eef908bc6c8e~mv2.jpg",
      time: "1 hr",
      link: "/green-building-consulting",
    },
    {
      title: "Energy Water Performance",
      description: "Energy and Water use analysis",
      image:
        "https://static.wixstatic.com/media/0589ca_267150fe675a4797b0d3c30877d58ef5~mv2.png/v1/fill/w_363,h_363,fp_0.50_0.50,lg_1,q_85,enc_auto/0589ca_267150fe675a4797b0d3c30877d58ef5~mv2.png",
      time: "30 min",
      link: "/energy-water-performance",
    },
    {
      title: "Indoor Environmental Assessment",
      description:
        "Measurements of indoor carbon dioxide, noise, and lighting levels ",
      image:
        "https://static.wixstatic.com/media/0589ca_5367d943baf841a0bd12a3218e68b29f~mv2.jpeg/v1/fill/w_363,h_363,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/0589ca_5367d943baf841a0bd12a3218e68b29f~mv2.jpeg",
      time: "30 min",
      link: "/indoor-environmental-assessment",
    },
  ];
  return (
    <section id="services" className="Services">
      <h2>Services</h2>
      <div className="cardlist">
        {services.map((d) => (
          <div className="card">
            <figure
              style={{
                backgroundImage: `url(${d.image})`,
              }}
            >
              <div></div>
            </figure>
            <div>
              <hgroup>
                <h3>{d.title}</h3>
                <h5>{d.description}</h5>
                <hr />
                <h5>1 hr</h5>
              </hgroup>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
