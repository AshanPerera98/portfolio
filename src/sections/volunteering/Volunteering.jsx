import SectionContainer from "../../components/section_container/SectionContainer";
import VolunteerCard from "../../components/volunteer_card/VolunteerCard";
import "./Volunteering.css";

import VolunteeringData from "./VolunteeringData";

function Volunteering() {
  return (
    <SectionContainer title="Volunteering" id="volunteering">
      <div className="volunteering-block">
        {VolunteeringData.map((data, index) => {
          return <VolunteerCard key={index} data={data} />;
        })}
      </div>
    </SectionContainer>
  );
}

export default Volunteering;
