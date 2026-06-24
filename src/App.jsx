import React, { useState } from "react";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import Pg from "./components/programs/Pg";
import Title from "./components/title/Title";
import Ab from "./components/about/Ab";
import Cam from "./components/campus/Cam";
import Ts from "./components/test/Ts";
import Ct from "./components/contact/Ct";
import Ft from "./components/footer/Ft";
import Vp from "./components/vp/Vp";

const App = () => {
  const [pl, spl] = useState(false);
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <div className="container">
        <Title sb={"Our program"} tt={"What We Offer"}></Title>
        <Pg></Pg>
        <Ab spl={spl}></Ab>
        <Title sb={"Gallery"} tt={"Campus Photos"}></Title>
        <Cam></Cam>
        <Title sb={"Testimonials"} tt={"What Students says"}></Title>
        <Ts></Ts>
        <Title sb={"Contact us"} tt={"Get in Touch"}></Title>
        <Ct></Ct>
        <Ft></Ft>
      </div>
      <Vp pl={pl} spl={spl}></Vp>
    </div>
  );
};

export default App;
