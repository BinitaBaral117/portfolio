import React from "react";
import "./intro.css";
import Developer from "../../assets/Developer.jpeg";
// import { Link } from "react-scroll";
// import { PiBagFill } from "react-icons/pi";

const Intro = () => {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introtext">
            I'm <span className="introname">Binita Baral</span>
          </span>
          <br /> Frontend Developer
          <p className="intropara">Greetings! I'm Binita Baral, a passionate frontend web developer <br /> with a keen eye for design and a commitment to creating engaging <br /> and user-friendly digital experiences. With a background in front-end <br /> technologies, I bring a unique blend of skills and creativity to the world <br /> of web development.</p>
          
        </div>
        <img
          src={Developer}
          alt="Profile of Developer"
          className="developerimage"
        />
      </section>
    </div>
  );
};

export default Intro;
