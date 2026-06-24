import React from "react";
import pg from "../../assets/program-1.png";
import pg1 from "../../assets/program-2.png";
import pg2 from "../../assets/program-3.png";
import pc from "../../assets/program-icon-1.png";
import pc1 from "../../assets/program-icon-2.png";
import pc2 from "../../assets/program-icon-3.png";

import "./pg.css";

const Pg = () => {
  return (
    <div className="pg" id="pg">
      <div className="program">
        <img src={pg} alt="" />
        <div className="caption">
          <img src={pc} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={pg1} alt="" />
        <div className="caption">
          <img src={pc1} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={pg2} alt="" />
        <div className="caption">
          <img src={pc2} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Pg;
