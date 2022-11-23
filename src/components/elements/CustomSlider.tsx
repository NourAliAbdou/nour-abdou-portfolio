import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick";
import { sliderSettings } from "../data";

// import "../../style/css/media.css";

type Props = {
  childern: any;
  settings?: any;
};
const CustomSlider = (props: Props) => {
  const { childern } = props;
  const renderSlider = () => (
    <Slider
      appendDots={(dots) => {
        return (
          <div
            className="p-32"
            style={{
              // backgroundColor: "#ddd",
              // borderRadius: "10px",
              padding: "20px",
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        );
      }}
      // customPaging={(i) => (
      //   <div
      //     style={{
      //       // width: "30px",
      //       color: "blue",
      //       // border: "1px blue solid",
      //     }}
      //   >
      //     {i + 1}
      //   </div>
      // )}
      {...(props.settings || sliderSettings)}
    >
      {childern}
    </Slider>
  );

  return renderSlider();
};

export default CustomSlider;
