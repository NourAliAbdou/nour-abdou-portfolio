import React from "react";
import { useMediaQuery } from "react-responsive";
//  import "aos/dist/aos.css";
import devlogo from "../../assets/images/dev-to.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IExperienceData } from "src/types/app.type";
import Accordion from "./Accordion.card";

type Props = {
  work: IExperienceData;
};

function ExperienceCard(props: Props) {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  // alert(blog.title)
  const { work } = props;

  const renderCard = (
    <div className="h-fit">
      <h5>{work.title} </h5>
      <a
        href={work.companyWebsite}
        target="_blank"
        // className="mt-6 learn-more animate__animated animate__bounceInUp"
      >
        <span className="place text-sky-900 hover:text-red-400">
          {work.company}
        </span>
      </a>
      <div className="d-flex mt-2 mb-3  ">
        <i className="text-slate-400 uil uil-calendar-alt" />
        <h6 className="text-xs mt-1 ml-1.5 text-slate-400">{work.period}</h6>
      </div>
      <div className="d-flex">
        {work.jobType.map((type) => (
          <span className="inline-block bg-gray-200 overflow-hidden rounded-full px-1.5 py-0.5 text-xs text-gray-600 mr-2 mb-2">
            {type}
          </span>
        ))}
      </div>
    </div>
  );
  const renderFull = (
    <div>
      <hr className="my-3" />
      <p>Regular Tasks & Responsibilities:</p>
      {work.description.map((desc) => (
        <p className="d-flex text-sm text-zinc-700 font-thin">
          <p className="mr-1">{"- "}</p>
          {` ${desc}`}
        </p>
      ))}
    </div>
  );
  return (
    <div
      className="hover:animate-wiggle"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="mx-2 p-4 border-l-4 border-main-col bg-white max-w-sm rounded-md overflow-hidden drop-shadow-2xl mt-20   ">
        <Accordion Card={renderCard} Full={renderFull} />
      </div>
    </div>
  );
}

export default ExperienceCard;
