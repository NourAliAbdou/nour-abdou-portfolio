import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Experiences from "./Experiences";
import Volunteerings from "./Volunteerings";

const Experience = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const renderContent = () => (
    <div className="container">
      <Experiences />
      <Volunteerings />
    </div>
  );

  return (
    <section className="experience pt-32" id="experience">
      {renderContent()}
    </section>
  );
};

export default Experience;
