/* eslint-disable react/prop-types */
import "./EducationCard.css";
// import kdu_logo from "./../../assets/education_logos/Kotelawala_Defence_University.webp";

function EducationCard(props) {
  const { logo, qualification, institute, from, to } = props.data;
  const renderLogo = () => {
    return (
      <div className="column is-narrow is-flex align-items:center justify-content:center education-logo">
        <img src={logo} className="institute-logo" />
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div
        className={`column details-column ${
          props.isLeft ? "has-text-left" : "has-text-right"
        }`}
      >
        <p className="qualification">{qualification}</p>
        <p className="institue">{institute}</p>
        <p className="duration">{`${from} ${to ? ` - ${to}` : ""}`}</p>
      </div>
    );
  };

  return (
    <div className="container education-card">
      <div className="columns">
        {props.isLeft ? renderLogo() : renderDetails()}
        <div className="column is-narrow is-hidden-mobile">
          <div className="vertical-line" />
        </div>
        {props.isLeft ? renderDetails() : renderLogo()}
      </div>
    </div>
  );
}

export default EducationCard;
