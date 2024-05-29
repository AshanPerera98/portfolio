import EducationCard from "../../components/education_card/EducationCard";
import SectionContainer from "../../components/section_container/SectionContainer";
import "bulma-timeline/dist/css/bulma-timeline.min.css";
import { TbCircleCheckFilled } from "react-icons/tb";
import "./Education.css";

import EducationData from "./EducationData";

function Education() {
  const renderTimeline = (aligned) => {
    return (
      <>
        {EducationData.map((data, index) => {
          return (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker is-primary is-image is-24x24">
                <TbCircleCheckFilled className="timeline-icon" />
              </div>
              <div className="timeline-content">
                <EducationCard
                  isLeft={aligned ? true : index % 2 == 0}
                  data={data}
                />
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <SectionContainer title="Education" id="education">
      <div className="container education-block is-hidden-touch">
        <div className="timeline is-centered">{renderTimeline(false)}</div>
      </div>
      <div className="container education-block is-hidden-desktop centered">
        <div className="timeline">{renderTimeline(true)}</div>
      </div>
    </SectionContainer>
  );
}

export default Education;
