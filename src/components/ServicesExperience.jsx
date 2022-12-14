import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "Front-End Development",
      desc: " With a strong understanding of HTML, CSS, and JavaScript, I am able to implement designs and bring them to life in the browser ",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Full Stack Web Development",
      desc: "As a full-stack developer, I have a strong understanding of both front-end and back-end technologies. I  have a good understanding of the development process, from concept to deployment.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Backend Development",
      desc: "As a backend developer, I specialize in building server-side applications using JavaScript and the Node.js runtime environment. With a strong understanding of backend technologies and concepts, I am able to design and implement efficient and scalable server-side solutions.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}

export default ServicesExperience;
