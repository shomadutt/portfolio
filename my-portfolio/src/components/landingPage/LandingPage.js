import React from "react";
import "./landingPage.scss";
import Woman from "../../images/woman.png";

const LandingPage = () => {
  return (
    <div className="container-fluid px-0">
      <img src={Woman} alt="woman in a sunset" id="womanImage" />
    </div>
  );
};

export default LandingPage;
