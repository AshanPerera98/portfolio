/* eslint-disable react/prop-types */
import "./VolunteerCard.css";

function VolunteerCard(props) {
  const { logo, name, organizzation, from, to, points } = props.data;
  return (
    <div className="container volunteer-card">
      <div className="columns">
        <div className="column is-2 is-flex align-items:center justify-content:center volunteer-logo">
          <img src={logo} />
        </div>
        <div className="column is-4 has-text-left volunteer-details">
          <p className="name">{name}</p>
          <p className="organization">{organizzation}</p>
          <p className="period">{`${from} - ${to}`}</p>
        </div>
        <div className="column is-narrow is-hidden-mobile devider">
          <div className="vertical-line" />
        </div>
        <div className="column has-text-left volunteer-brief content">
          <ul>
            {points.map((point, index) => {
              return <li key={index}>{point}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default VolunteerCard;
