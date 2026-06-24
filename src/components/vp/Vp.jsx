import React, { useRef } from "react";
import "./vp.css";
import vd from "../../assets/video.mp4";

const Vp = ({ pl, spl }) => {
  const pm = useRef(null);
  const cp = (e) => {
    if (e.target === pm.current) {
      spl(false);
    }
    console.log(pm.current, e.target);
  };
  return (
    <div className={`vp ${pl ? "" : "hide"}`} ref={pm} onClick={cp}>
      <video src={vd} autoPlay muted controls></video>
    </div>
  );
};

export default Vp;
