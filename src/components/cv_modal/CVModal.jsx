/* eslint-disable react/prop-types */
import { FaFileArrowDown } from "react-icons/fa6";
import DeveloperCV from "./../../assets/CVs/Ashan_Perera_Developer_CV.pdf";
import DesignerCV from "./../../assets/CVs/Ashan_Perera_Designer_CV.pdf";
import "./CVModal.css";

function CVModal(props) {
  return (
    <div className={`modal ${props.CVmodal ? "is-active" : ""}`}>
      <div className="modal-background" onClick={props.toggleCVmodal} />
      <div className="modal-content has-text-centered">
        <p className="cv-question">Which Ashan are you looking for?</p>
        <div className="button-grid">
          <a href={DeveloperCV} download={""}>
            <button className="download-button">
              Developer <FaFileArrowDown className="icon" />
            </button>
          </a>
          <p className="or">or</p>
          <a href={DesignerCV} download={""}>
            <button className="download-button">
              Designer <FaFileArrowDown className="icon" />
            </button>
          </a>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={props.toggleCVmodal}
      ></button>
    </div>
  );
}

export default CVModal;
