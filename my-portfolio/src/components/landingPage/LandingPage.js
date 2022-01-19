import React from "react";
import "./landingPage.scss";
import Woman from "../../images/woman.png";

const LandingPage = () => {
  return (
    <div className="landing">
      <img src={Woman} alt="" id="womanImage" />
    </div>
  );
};

export default LandingPage;
