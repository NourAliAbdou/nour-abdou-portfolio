import React from "react";
import { useMediaQuery } from "react-responsive";
//  import "aos/dist/aos.css";
import devlogo from "../../assets/images/dev-to.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITechnologiesData } from "src/types/app.type";

type Props = {
  technology: ITechnologiesData;
};

function TechnologiesCard(props: Props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // alert(technology.title)
  const { technology } = props;
  return (
    <div
      className="hover:animate-bounce flex flex-col items-center justify-self-center w-fit "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h5 className="self-center  h-9">
        {/* <i
        className={`text-7xl text-main-col fa-brands fa-${technology.icon}`}
      ></i> */}
        <img src={technology.icon} />
        {""}
      </h5>

      {/* <h5 className="skill-title text-center">{technology.title}</h5> */}
    </div>
  );
}

export default TechnologiesCard;
