import "aos/dist/aos.css";
import { volunteering } from "../../data";

import VolunteerCard from "../../cards/volunteer.card";
import CustomSlider from "../../elements/CustomSlider";
import Title from "../../elements/Title";

// import "../../style/css/media.css";

const Volunteerings = () => {
  const renderVolunteering = () => (
    <div className="mt-12 ">
      
      <Title title="Volunteering" />

      <div
      // className="exp-list"
      >
        <CustomSlider
          childern={volunteering.map((work) => (
            <VolunteerCard work={work} />
          ))}
        />
      </div>
    </div>
  );

  return renderVolunteering();
};

export default Volunteerings;
