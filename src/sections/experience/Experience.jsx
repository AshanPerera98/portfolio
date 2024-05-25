import ExperienceCard from "../../components/experience_card/ExperienceCard";
import SectionContainer from "./../../components/section_container/SectionContainer";
import "./Experience.css";

function Experience() {
  return (
    <SectionContainer title="Experience">
      <div className="experience-block">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </SectionContainer>
  );
}

export default Experience;
