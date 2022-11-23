import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GalaxyAnimation from "../../elements/GalaxyAnimation.componen";
import { useMediaQuery } from "react-responsive";
import { mainSocials, socials } from "../../data";

const Main = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const renderContent = () => (
    <div className="mt-16 w-['85%'] inline-block align-middle  h-screen  pb-6 text-center">
      <div className="w-full content-center justify-center">
        <h1 className="text-title-text">Howdy, I'm Nour</h1>

        <h3 className="text-title-text">
          I am a cross-platform Mobile Application Developer, & in my way to be
          a full stack web developer.
        </h3>
        <hr />

        <ul className="ml-6 p-o text-3xl">
          <a href={"#"} className="button btn project-btn">
            <i className="fa fa-book"></i>Project
          </a>
          <a
            href={"https://github.com/NourAliAbdou"}
            className="button btn github-btn"
          >
            <i className="fa fa-github"></i>Github
          </a>
        </ul>
      </div>
    </div>
  );
  const renderHi = () => (
    <div
      className="d-flex justify-self-center"
      data-aos="zoom-in-down"
      data-aos-delay="500"
    >
      <h1
        className={`${
          isTabletOrMobile ? "text-5xl" : " text-6xl  text-center"
        } text-light  font-bold pt-3`}
      >
        Howdy
      </h1>
      <h4
        className={`hi mt-6 ml-1   ${
          isTabletOrMobile ? "text-4xl" : " text-5xl"
        } `}
      >
        👋
      </h4>
    </div>
  );
  const renderOtherContent = () => (
    <div
      className={`${
        isTabletOrMobile ? "" : "px-32"
      }  pt-32 pb-8 w-screen inline-block align-middle  h-full`}
    >
      <div
        className={`${
          isTabletOrMobile ? "" : "w-full flex flex-col items-center"
        }`}
      >
        {renderHi()}
        <h1
          className={`${
            isTabletOrMobile ? "text-5xl" : " text-6xl text-center"
          } text-light font-bold  pt-3`}
          data-aos="zoom-in-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="600"
        >
          I'm NOUR
        </h1>
        <h3
          className={`${
            isTabletOrMobile ? "w-[93%]" : "w-[60%] text-center"
          } pt-6 pb-2 text-light  text-xl`}
          data-aos="zoom-in-down"
          data-aos-delay="700"
        >
          I am a Senior Cross-Platform Mobile Application Developer & in my way
          to be a full stack developer.
        </h3>

        <a
          href="#about"
          className="learn-more mt-6"
          data-aos="zoom-in-down"
          data-aos-delay="800"
        >
          <span className="circle" aria-hidden="true">
            <span className="button-text  ">Know More about me</span>
            <span className="icon arrow"></span>
          </span>

          {/* <span className="button-text  ">Know More about me</span> */}
        </a>
        <hr className="my-6   " />
        <div className="social-icons">
          <ul className="" data-aos="zoom-in-down" data-aos-delay="800">
            {mainSocials.map((contact) => (
              <li className="hover:animate-bounce">
                <a href={`${contact.link}`} target="_blank">
                  <i
                    className={`text-light-t ${
                      contact.icon.includes("fab fa-dev")
                        ? "fab fa-dev"
                        : `uil uil-${contact.icon}`
                    }`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  return (
    <section className="main " id="main">
      {/* <GalaxyAnimation /> */}

      {renderOtherContent()}
    </section>
  );
};

export default Main;
