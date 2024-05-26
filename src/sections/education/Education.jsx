import EducationCard from "../../components/education_card/EducationCard";
import SectionContainer from "../../components/section_container/SectionContainer";
import "./Education.css";
import "bulma-timeline/dist/css/bulma-timeline.min.css";
import { TbCircleCheckFilled } from "react-icons/tb";

function Education() {
  const renderTimeline = (aligned) => {
    return (
      <>
        <div className="timeline-item">
          <div className="timeline-marker is-primary is-image is-24x24">
            <TbCircleCheckFilled className="timeline-icon" />
          </div>
          <div className="timeline-content">
            <EducationCard isLeft={aligned ? true : true} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker is-primary is-image is-24x24">
            <TbCircleCheckFilled className="timeline-icon" />
          </div>
          <div className="timeline-content">
            <EducationCard isLeft={aligned ? true : false} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker is-primary is-image is-24x24">
            <TbCircleCheckFilled className="timeline-icon" />
          </div>
          <div className="timeline-content">
            <EducationCard isLeft={aligned ? true : true} />
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker is-primary is-image is-24x24">
            <TbCircleCheckFilled className="timeline-icon" />
          </div>
          <div className="timeline-content">
            <EducationCard isLeft={aligned ? true : false} />
          </div>
        </div>
      </>
    );
  };
  return (
    <SectionContainer title="Education">
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
