import { TbCircleChevronDown } from "react-icons/tb";
import "./ExperienceCard.css";
import { useState } from "react";

function ExperienceCard() {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="container experience-card">
      <div className="columns">
        <div className="column is-2 is-flex align-items:center justify-content:center company-logo">
          <img src="https://www.pearson.com/content/dam/help/hedReimagined/logos/logo-hed--on-dark.svg" />
        </div>
        <div className="column is-narrow has-text-left work-details">
          <p className="occupation">Software Engineer</p>
          <p className="comapny">Pearson Lanka</p>
          <p className="period">2022-present</p>
        </div>
        <div className="column is-narrow is-hidden-mobile devider">
          <div className="vertical-line" />
        </div>
        <div className="column has-text-left company-brief">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="column is-1 controls is-hidden-touch">
          <TbCircleChevronDown
            className={`control-icon ${expanded ? "expanded" : ""}`}
            onClick={toggleExpand}
          />
        </div>
      </div>
      {expanded && (
        <div className="content expanded-content has-text-left">
          <ul>
            <li>
              Led the design and development of multiple enterprise-level
              micro-frontend applications of the Higher Education Department,
              consumed by thousands of consumers on a daily basis.
            </li>
            <li>
              Researched, documented, developed, and implemented OneTrust cookie
              management across multiple high-priority consumer applications to
              centralize the cookie consent throughout the applications.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
