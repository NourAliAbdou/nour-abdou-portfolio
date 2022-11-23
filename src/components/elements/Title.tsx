import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import { sliderSettings } from "../data";

// import "../../style/css/media.css";

type Props = {
  title: any;
  children?: any;
};
const Title = (props: Props) => {
  const { title } = props;

  return (
    <div data-aos="fade-down">
      <h2 className="title mb-6">{title}</h2>
    </div>
  );
};

export default Title;
