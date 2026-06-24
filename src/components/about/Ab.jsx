import React from "react";
import "./ab.css";
import amg from "../../assets/about.png";
import pmg from "../../assets/play-icon.png";

const Ab = ({ spl }) => {
  return (
    <div className="ab" id="ab">
      <div className="left">
        <img src={amg} alt="" className="am" />
        <img
          src={pmg}
          alt=""
          className="pm"
          onClick={() => {
            spl(true);
          }}
        />
      </div>
      <div className="right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge,skills, ans
          experiences needed to excel in the dynamic field of education.
        </p>
        <p>
          With a focus of innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          whether you aspire to become a teacher, administrator, counselor, or
          educatioal leader, ou diverse range of programs offers the present
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default Ab;
