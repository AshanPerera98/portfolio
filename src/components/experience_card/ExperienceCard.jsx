/* eslint-disable react/prop-types */
import { TbCircleChevronDown } from "react-icons/tb";
import "./ExperienceCard.css";
import { useState } from "react";

function ExperienceCard(props) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const { logo, position, name, from, to, dis, points, stack } = props.data;

  return (
    <div className="container experience-card">
      <div className="columns">
        <div className="column is-2 is-flex align-items:center justify-content:center company-logo">
          <img src={logo} />
        </div>
        <div className="column is-narrow has-text-left work-details">
          <p className="occupation">{position}</p>
          <p className="comapny">{name}</p>
          <p className="period">{`${from} - ${to}`}</p>
        </div>
        <div className="column is-narrow is-hidden-mobile devider">
          <div className="vertical-line" />
        </div>
        <div className="column has-text-left company-brief">
          <p>{dis}</p>
        </div>
        <div className="column is-1 controls is-hidden-touch">
          <TbCircleChevronDown
            className={`control-icon ${expanded ? "expanded" : ""}`}
            onClick={toggleExpand}
          />
        </div>
      </div>
      {expanded && (
        <>
          <div className="tags stack-tag-group">
            {stack.map((tag, index) => {
              return (
                <span className="tag stack-tag" key={index}>
                  {tag}
                </span>
              );
            })}
          </div>
          <div className="content expanded-content has-text-left">
            <ul>
              {points.map((point, index) => {
                return <li key={index}>{point}</li>;
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default ExperienceCard;
