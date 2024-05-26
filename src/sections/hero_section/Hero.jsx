import { FaFileArrowDown } from "react-icons/fa6";
import "./Hero.css";
import { useState } from "react";
import CVModal from "../../components/cv_modal/CVModal";

function Hero() {
  const [CVmodal, setCVmodal] = useState(false);
  const toggleCVmodal = () => {
    setCVmodal(!CVmodal);
  };
  return (
    <section className="hero is-fullheight dark-bg">
      <div className="hero-head"></div>
      <div className="hero-body">
        <div className="container has-text-left">
          <div className="main-block">
            <p className="main-name">Ashan Perera</p>
            <p className="main-tag">Developer / Designer</p>
          </div>
          <p className="main-description">
            <strong>Warning:</strong> This website may induce uncontrollable
            urges to redesign your life. Proceed with caution!
          </p>
          <button className="CV-button" onClick={toggleCVmodal}>
            Download CV <FaFileArrowDown className="icon" />
          </button>
          <CVModal CVmodal={CVmodal} toggleCVmodal={toggleCVmodal} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
