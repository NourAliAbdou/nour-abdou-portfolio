import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import Title from "../../elements/Title";
import { CustomSlider } from "../../elements";
import { availablePositions, availableServices } from "../../data";

const Hire = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const renderPositionItem = (position) => (
    <div
      className={`bg-white pt-6 pb-3 pl-6 border-1 rounded-md border-[#9f9f9f] flex text-xl ${
        isTabletOrMobile ? "" : " "
      }`}
    >
      <span className="">
        {/* <h6 className="mb-2 text-sm text-[#9f9f9f]">{position.type}</h6> */}
        <div className="d-flex">
          {position.type.map((type) => (
            <span className="inline-block bg-gray-200 overflow-hidden rounded-full px-1.5 py-0.5 text-xs text-gray-600 mr-2 mb-2">
              {type}
            </span>
          ))}
        </div>
        <div className="hover:animate-bounce h-16">
          <span className="hover:animate-bounce text-[#151439]">
            {position.position}
          </span>
        </div>
        <p className="text-sm">{position.desc}</p>
      </span>
    </div>
  );

  const renderServiceItem = (position) => (
    <div
      className={`bg-white h-32  pt-6 pb-3 pl-6 border-1 rounded-md border-[#9f9f9f] flex text-xl ${
        isTabletOrMobile ? "" : "  "
      }`}
    >
      <span className="">
        <div className="hover:animate-bounce h-16">
          <span className="text-lg hover:animate-bounce text-[#151439]">
            {position.name}
          </span>
        </div>
        <p className="text-sm text-[#9f9f9f]">{position.desc}</p>
      </span>
    </div>
  );

  const renderPositions = () => (
    <div
      className={`${isTabletOrMobile ? "" : " flex flex-col items-center "}`}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
    >
      <h5>
        I'm available for the following positions{" "}
        <span className="underline text-sky-700">Remotely</span>{" "}
      </h5>

      {isTabletOrMobile ? (
        <div className={` mt-3 `}>
          {availablePositions.map((position) => (
            <div className="mb-3">{renderPositionItem(position)} </div>
          ))}
        </div>
      ) : (
        <div className={` mt-3 `}>
          <CustomSlider
            childern={availablePositions.map((position) => (
              <div className=" px-3">{renderPositionItem(position)} </div>
            ))}
          />
        </div>
      )}
    </div>
  );
  const renderServices = () => (
    <div
      className={`mt-12 ${
        isTabletOrMobile ? "" : " flex flex-col items-center "
      }`}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
    >
      <h5>My Services</h5>

      {isTabletOrMobile ? (
        <div className={` mt-3 `}>
          {availableServices.map((position) => (
            <div className="mb-3">{renderServiceItem(position)} </div>
          ))}
        </div>
      ) : (
        <div className={` mt-3 `}>
          <CustomSlider
            childern={availableServices.map((position) => (
              <div className=" px-3">{renderServiceItem(position)} </div>
            ))}
          />
        </div>
      )}
    </div>
  );
  const renderContent = () => (
    <div className="container pt-12">
      <Title title="Colaborate with me" />
      {renderPositions()}
      {renderServices()}
      <div
        className={`mt-12 ${
          isTabletOrMobile ? "" : " flex flex-col items-center "
        }`}
      >
        <a
          href="#contact"
          className="mt-6 learn-more animate__animated animate__bounceInUp"
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text light-bg">Ask for smg else</span>
        </a>
      </div>
    </div>
  );

  return (
    <section className="hire" id="hire">
      {renderContent()}
    </section>
  );
};

export default Hire;
