/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/image_prof.png"  width="350px" height="400px" style={{borderRadius:"30px"}} alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Shantanu Bose</h6>
            <h3>Full Stack Web Developer</h3>
            <p>
            My name is Shantanu Bose, I am from Kolkata, West Bengal. Passionate Full Stack Web Developer with skills in the MERN stack, I have learned Full Stack Web Development in Masai school. Skilled in problem- solving and execution of software tasks from scratch. I am looking forward to join a company where I can contribute to individual and company growth.
            </p>
            <a className="btn" href="shantanu_cv_1.pdf">
             Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
