import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import mn from "../../assets/menu-icon.png";

const Nav = () => {
  const [st, sst] = useState(false);
  const [mm, smm] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? sst(true) : sst(false);
    });
  }, []);

  const tg = () => {
    mm ? smm(false) : smm(true);
  };
  return (
    <nav className={`container ${st ? "dk" : ""}`}>
      <img src={logo} alt="" className="lg" />
      <ul className={mm ? "" : "hd"} onClick={() => smm(false)}>
        <li>
          <Link
            to="hr"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => smm(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="pg"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => smm(false)}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="ab"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={() => smm(false)}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="cm"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => smm(false)}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="tm"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => smm(false)}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="ct"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
            onClick={() => smm(false)}
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={mn} alt="" className="mn" onClick={tg} />
    </nav>
  );
};

export default Nav;
// greatstack.dev
