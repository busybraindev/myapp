import React, { useRef } from "react";
import "./ts.css";
import im from "../../assets/next-icon.png";
import im1 from "../../assets/back-icon.png";
import us from "../../assets/user-1.png";
import us1 from "../../assets/user-2.png";
import us2 from "../../assets/user-3.png";
import us3 from "../../assets/user-4.png";

const Ts = () => {
  const ref = useRef();
  let tx = 0;
  const sf = () => {
    if (tx > -50) {
      tx -= 25;
    }
    ref.current.style.transform = `translateX(${tx}%)`;
  };
  const sb = () => {
    if (tx < 0) {
      tx += 25;
    }
    ref.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="ts" id="tm">
      <img src={im1} alt="" className="bk" onClick={sb} />

      <div className="slider">
        <ul ref={ref}>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={us} alt="" />
                <div>
                  <h3>David Odesomi</h3>
                  <span>SQL, ABEOKUTA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at SQL was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={us1} alt="" />
                <div>
                  <h3>David Odesomi</h3>
                  <span>SQL, ABEOKUTA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at SQL was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={us2} alt="" />
                <div>
                  <h3>David Odesomi</h3>
                  <span>SQL, ABEOKUTA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at SQL was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={us3} alt="" />
                <div>
                  <h3>David Odesomi</h3>
                  <span>SQL, ABEOKUTA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at SQL was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <img src={im} alt="" className="nx" onClick={sf} />
    </div>
  );
};

export default Ts;
