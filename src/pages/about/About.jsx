import React from "react";
import i1 from "../../../public/Logo2.jpeg";
const About = () => {
  return (
    <div>
      <div className="home-first">
        <img className="logoImg" src={i1} alt="" />
        <div className="a"></div>
        <div className="home-fir-mini">
          <h1>About me!</h1>
          <br />
          <p>
            My name is Ibrohim, I'm 17 years old and I studied frontend course
            for a year. <hr /> Somethings I'm interested in are reading books,
            coding and building websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
