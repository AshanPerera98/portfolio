import ExperienceCard from "../../components/experience_card/ExperienceCard";
import SectionContainer from "./../../components/section_container/SectionContainer";
import "./Experience.css";

import ExperienceData from "./ExperienceData";

function Experience() {
  return (
    <SectionContainer title="Experience">
      <div className="experience-block">
        {ExperienceData.map((data, index) => {
          return <ExperienceCard key={index} data={data} />;
        })}
      </div>
    </SectionContainer>
  );
}

export default Experience;
