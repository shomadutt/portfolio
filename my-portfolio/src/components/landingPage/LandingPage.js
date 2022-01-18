import React from "react";
import "./landingPage.scss";
import Woman from "../../images/woman.png";

const LandingPage = () => {
  return (
    <div id="landing">
      <img src={Woman} alt="" id="womanImage" />
      <p id="landingText">Yoga For Life</p>
    </div>
  );
};

export default LandingPage;
