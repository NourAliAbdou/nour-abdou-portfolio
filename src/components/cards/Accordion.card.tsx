import React, { ReactElement, useState } from "react";
import { useMediaQuery } from "react-responsive";
//  import "aos/dist/aos.css";
import devlogo from "../../assets/images/dev-to.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IExperienceData } from "src/types/app.type";

type Props = {
  Card: ReactElement;
  Full: ReactElement;
};

function Accordion(props: Props) {
  const { Card, Full } = props;
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {Card}

      <button
        type="button"
        // className="navbar-toggler"

        onClick={() => setShowMore(!showMore)}
      >
        <span className="underline ">
          {showMore ? "Show less" : "Show more"}
        </span>
      </button>
      {showMore ? Full : null}

    </div>
  );
}

export default Accordion;
