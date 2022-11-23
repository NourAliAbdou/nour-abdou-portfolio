import { socials } from "../data";
import React from "react";
const backtop = { display: "none" };

const Footer = () => {
  const renderCopyRights = () => (
    <ul className="text-xs text-white text-center mt-1.5">
      <li className="inline-block">&copy; Copyright 2022 Nour Abdou </li>
    </ul>
  );
  const renderContent = () => (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="contact-social">
            {socials.map((contact) => (
              <li className="hover:animate-spin">
                <a href={`${contact.link}`} target="_blank">
                  <i
                    className={`${
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
      {renderCopyRights()}
    </div>
  );
  const renderBack2Top = () => (
    <a
      href="#"
      id="scroll"
      style={backtop}
      className="hover:animate-bounce animate__animated animate__backInDown"
    >
      <i className="uil uil-top-arrow-from-top"></i>
    </a>
  );

  return (
    <footer>
      {renderContent()}
      {renderBack2Top()}
    </footer>
  );
};

export default Footer;
