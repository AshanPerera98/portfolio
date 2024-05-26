/* eslint-disable react/prop-types */
import "./EducationCard.css";
import kdu_logo from "./../../assets/education_logos/Kotelawala_Defence_University.webp";

function EducationCard(props) {
  const renderLogo = () => {
    return (
      <div className="column is-narrow is-flex align-items:center justify-content:center education-logo">
        <img src={kdu_logo} className="institute-logo" />
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div
        className={`column ${
          props.isLeft ? "has-text-left" : "has-text-right"
        }`}
      >
        <p className="qualification">Bsc. (Hons) in Computer Science</p>
        <p className="institue">
          General Sir John Kotelawala Defence University
        </p>
        <p className="duration">2019 - 2022</p>
      </div>
    );
  };

  return (
    <div className="container education-card">
      <div className="columns is-mobile">
        {props.isLeft ? renderLogo() : renderDetails()}
        <div className="column is-narrow">
          <div className="vertical-line" />
        </div>
        {props.isLeft ? renderDetails() : renderLogo()}
      </div>
    </div>
  );
}

export default EducationCard;
