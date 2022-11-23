import React, { useEffect } from "react";
import images from "../../../constants/images";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../elements/Title";

// import "../../style/css/media.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const renderImage = () => (
    <div
      className=" col-12 col-lg-4 flex justify-self-center  mt-3 px-6 content-center "
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="about-img h-fit w-fit  ">
        <img
          src={images.Nour}
          alt="Nour Abdou"
          className="rounded-full border-1 border-black"
        />
        <div className="text-center mt-3">
          <h3 className="mb-2">📜 My Motto </h3>Think hard and learn how to see
          the world.
        </div>
      </div>
    </div>
  );
  const renderBar = () => (
    <div className="my-3">
      <i className="text-neutral-400">__</i>
      <i className="text-neutral-400 uil uil-star text-xs"></i>
      <i className="text-neutral-400 uil uil-star"></i>
      <i className="text-neutral-400 uil uil-star text-xs"></i>
      <i className="text-neutral-400">__</i>
    </div>
  );
  const renderButton = (title: string, link: string) => (
    <a
      href={link}
      target="_blank"
      className=" hover:animate-bounce  grid justify-items-stretch px-3 mr-3  bg-main-col rounded-md  w-fit h-11   "
    >
      {/* <i className="uil uil-whatsapp my-float"></i> */}
      <p className=" self-center  text-center inline-block align-middle text-sm text-white">
        {title}
      </p>
    </a>
  );
  const renderCVs = () => (
    <div className="d-flex">
      {renderButton(
        "Download My CV",
        "https://www.icloud.com/iclouddrive/07auZDRhOnJJzPBsrS-JyEaRw#CV_%5F_Resume_Nour"
      )}
      {renderButton(
        "Europass profile",
        "https://europa.eu/europass/eportfolio/api/eprofile/shared-profile/4317f281-c459-4243-80ef-056682605e12?view=html"
      )}
    </div>
  );
  const renderContent = () => (
    <div className="container mt-12">
      <div className="row ">
        {renderImage()}
        <div
          className="col-12 col-lg-8"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="mt-6">
            <p>Artificial Intelligence Engineer</p>
            <p>
              Mobile App Developer with 3+ year of commercial experience in
              developing applications with <strong>React Native</strong>.{" "}
            </p>
            <br />
            <p>
              {/* I have a proven track record of developing successful mobile
              JavaScript & TypeScript applications.
                */}
              ➡️ I have solid understanding of the mobile development full life
              cycle.
              <br />
              ➡️ Employ agile and scrum practices to ensure business deadlines
              are met.
              <br />
              ➡️ I'm a leader, a Self-starter, a Constant learner, and problem
              solver.
              <br />
              ➡️ Passionate about studying Natural Languages and Music.
              <br />
              ➡️ Eager to join a team of talented developers and help build
              world-class mobile apps.
              <br />
            </p>
            {renderBar()}

            <div>
              🏛 I have built my own{" "}
              <a
                className="hover:animate-bounce text-sky-600 underline "
                target="_blank"
                href="https://github.com/NourAliAbdou/react-native-ts-boilerplate"
              >
                react-native-ts-boilerplate
              </a>{" "}
              and published it on github.
              <br />
              👩🏻‍💻 I have built <span className="text-3xl">+10 </span> React
              Native Applications.
              <br />
              📲 I have published <span className="text-3xl">+5 </span>
              applications on Google Play & App Store.
            </div>
            {renderBar()}
            <div>
              👀 I’m interested in Entrepreneurship, AI & NLP
              <br />
              🌱 I’m currently learning web full-stack (ReactJS & nodeJS )
              <br />
              👯‍♀️ I’m looking to collaborate with other developers, leaders &
              entrepreneurs
              <br />✨ fun fact: I love to 🎤 sing, voice act and 🏃🏻‍♀️ wallllk
            </div>

            <div className="row mt-6">
              <div className="col-md-12 col-lg-6">
                <ul>
                  <li>
                    <i className="uil uil-bag-alt"></i> 4+ yr Experience
                  </li>
                </ul>
              </div>
              <div className="col-md-12 col-lg-6">
                <ul>
                  <li>
                    <i className="uil uil-graduation-cap"></i> B.Sc Computer
                    Science- AI and NLP
                  </li>
                </ul>
              </div>
              {renderCVs()}
              <a
                href="#contact"
                className="mt-6 learn-more animate__animated animate__bounceInUp"
              >
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text light-bg">Get in touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <section className="about pt-32" id="about">
      <Title title="About Me" />
      {renderContent()}
    </section>
  );
};

export default About;
