import React from "react";
import "./hero.css";
import arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container" id="hr">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower to empower students
          with the knowledge, skills and experiences needed to excel in the
          dynamic field of education
        </p>
        <button className="btn">
          <Link to={"pg"} smooth={true} offset={-260} duration={500}>
            Explore More <img src={arrow} alt="" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
