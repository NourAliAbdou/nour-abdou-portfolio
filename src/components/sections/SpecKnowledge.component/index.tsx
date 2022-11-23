import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Title, CustomSlider } from "../../elements";
import TechnologiesCard from "../../cards/technologies.card";
import { technologes, techSliderSettings, tools } from "../../data";
import { useMediaQuery } from "react-responsive";

const SpecKnowledge = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const renderContent = (title, grid) => (
    <div>
      <div
        className={`${isTabletOrMobile ? "" : " flex flex-col items-center "}`}
        data-aos="flip-up"
      >
        <div className="d-flex ml-2 mb-3 ">
          <i className="text-xl text-neutral-600 uil uil-wrench"></i>
          <h3 className="ml-3 text-left text-neutral-600 text-lg ">{title}</h3>
        </div>
        {/* <CustomSlider
    childern={technologes.map((technology) => (
      <TechnologiesCard technology={technology} />
    ))}
    settings={techSliderSettings}
  /> */}
        <div
          className={`grid  ${
            isTabletOrMobile ? " grid-cols-3 gap-3" : "w-2/3 grid-cols-6 gap-6"
          }`}
        >
          {grid}
        </div>
      </div>
    </div>
  );
  const renderBar = () => (
    <div className="my-6">
      <i className="text-neutral-400">__</i>
      <i className="text-neutral-400 uil uil-star text-xs"></i>
      <i className="text-neutral-400 uil uil-star"></i>
      <i className="text-neutral-400 uil uil-star text-xs"></i>
      <i className="text-neutral-400">__</i>
    </div>
  );
  return (
    <section className="skills" id="skills">
      <div className="container">
        <Title title="Specialized Knowledge" />
        {renderContent(
          "Technologies",
          technologes.map((technology) => (
            <TechnologiesCard technology={technology} />
          ))
        )}
        <div
          className={`${
            isTabletOrMobile ? "" : " flex flex-col items-center "
          }`}
        >
          {renderBar()}
        </div>
        {renderContent(
          "Tools ",
          tools.map((technology) => (
            <TechnologiesCard technology={technology} />
          ))
        )}
      </div>
    </section>
  );
};

export default SpecKnowledge;
