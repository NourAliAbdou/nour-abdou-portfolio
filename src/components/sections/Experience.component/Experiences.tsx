import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { works } from "../../data";

import ExperienceCard from "../../cards/experience.card";
import CustomSlider from "../../elements/CustomSlider";
import Title from "../../elements/Title";

// import "../../style/css/media.css";

const Experiences = () => {
  const renderExperience = () => (
    <div className="">
      <Title title="Experience" />

      <div
      // className="exp-list"
      >
        <CustomSlider
          childern={works.map((work) => (
            <ExperienceCard work={work} />
          ))}
        />
      </div>
    </div>
  );

  return renderExperience();
};

export default Experiences;
