import React from "react";
import "./cam.css";
import gl from "../../assets/gallery-1.png";
import gl1 from "../../assets/gallery-2.png";
import gl2 from "../../assets/gallery-3.png";
import gl3 from "../../assets/gallery-4.png";
import wh from "../../assets/white-arrow.png";
const Cam = () => {
  return (
    <div className="cm" id="cm">
      <div className="gl">
        <img src={gl} alt="" />
        <img src={gl1} alt="" />
        <img src={gl2} alt="" />
        <img src={gl3} alt="" />
      </div>
      <button className="btn dk">
        See more here <img src={wh} alt="" />
      </button>
    </div>
  );
};

export default Cam;
