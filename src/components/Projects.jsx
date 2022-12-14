/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "BlueMercury Website Clone",
      img: "/projects/project1.png",
      gLink: "https://github.com/shantanubose01/BluemercuryClone",
      lLink: "https://bluemercury1clone.netlify.app/",
      desc: "Bluemercury.com is a leading luxury beauty retailer offering the best cosmetics, skin care, makeup, perfume, hair, and bath and body. This is a collaborative project, built in 4 days by a team of 4 developers."
    },
    {
      title: "Alibaba Website Clone",
      img: "/projects/project2.png",
      gLink: "https://github.com/shantanubose01/Alibaba-Clone",
      lLink: "https://alibaba-clone-masai.netlify.app/",
      desc: "Alibaba, is a Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology. This is a  collaborative project, built in 4 days by a team of 4 developers."
    }
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/hafizjavaid"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
               {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
