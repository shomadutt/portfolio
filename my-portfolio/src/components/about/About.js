import React from "react";
import "./about.scss";

const About = () => {
  return (
    <section>
      <p className="sectionTitle" id="about">
        About Me
      </p>
      <p id="aboutText">
        My name is Dee, and I teach yoga. Join me and improve your life!{" "}
        <br></br>
        Finding peace and contentment in the present moment is one of the most
        challenging things to do, and yoga provides the tools we need to find
        that much-desired stillness.
      </p>
    </section>
  );
};

export default About;
