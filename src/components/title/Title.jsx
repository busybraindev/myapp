import React from "react";
import "./tt.css";

const Title = ({ sb, tt }) => {
  return (
    <div className="tt">
      <p>{sb}</p>
      <h2>{tt}</h2>
    </div>
  );
};

export default Title;
