import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import Title from "../../elements/Title";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const name = useRef();
  const email = useRef();
  const message = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("n.current", name.current?.value);
    console.log("e.current", email.current?.value);
    console.log("m.current", message.current?.value);
    const templateParams = {
      name: name.current?.value,
      email: email.current?.value,
      message: message.current?.value,
    };
    emailjs
      .send(
        "service_fgrr7q9",
        "template_xozf2nm",
        templateParams,
        "DW9wx-2D8Yj6qJ8YU"
      )
      .then(
        (result) => {
          console.log(result);

          alert("Thank You, I'll contact with you asap");
        },
        (error) => {
          console.log(error);
          alert("Oops, smg get wrong! \n Please, try again later");
        }
      );
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const renderForm = () => (
    <div
      className="col-12 col-lg-6"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
    >
      <h5 className={`mb-3  ${isTabletOrMobile ? "mt-6" : ""}`}>Message Me</h5>
      <form onSubmit={sendEmail}>
        <label for="name" className="form-label">
          Name
        </label>
        <input
          ref={name}
          type="text"
          name="name"
          className="form-control mb-20"
          id="name"
          placeholder="Your Name"
          required
        />

        <label for="email" className="form-label">
          E-mail
        </label>
        <input
          ref={email}
          type="email"
          name="email"
          className="form-control mb-20"
          id="email"
          placeholder="Your Email address"
          required
        />

        <label for="message" className="form-label">
          Message
        </label>
        <textarea
          ref={message}
          name="text"
          type="text"
          name="message"
          className="form-control mb-20"
          id="text"
          placeholder="Your message"
          required
          rows="5"
          cols="50"
        ></textarea>
        {/* <input
      type="text"
      name="message"
      className="form-control mb-20"
      id="text"
      placeholder="Your message"
      required
      rows="5"
    /> */}

        <input
          type="submit"
          className="hover:animate-bounce read-more"
          value="Submit"
        />
      </form>
    </div>
  );
  const renderListItem = (type, link, value, icon) => (
    <li>
      <i className={`uil uil-${icon}`}></i>
      <span className="info-details">
        <h6>{type}</h6>
        <div className="hover:animate-bounce">
          <span className="hover:animate-bounce info-value">
            <a href={link}> {value}</a>
          </span>
        </div>
      </span>
    </li>
  );
  const renderContactInfo = () => (
    <div
      className="col-12 col-lg-4"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="300"
    >
      <h5 className="mb-3">Contact Info</h5>

      <ul>
        {renderListItem(
          "Phone",
          "tel:+963937281408",
          "+963 937281408",
          "outgoing-call"
        )}
        {renderListItem(
          "Email",
          "mailto:nour.ali.abdou@gmail.com",
          "nour.ali.abdou@gmail.com",
          "envelope-edit"
        )}
        {renderListItem(
          "WhatsApp",
          "https://wa.me/message/P4Z4QEQSEZIDD1",
          "Nour Abdou",
          "whatsapp"
        )}

        <li>
          <i className="uil uil-location-pin-alt"></i>
          <span className="info-details">
            <h6>Home Country</h6>
            <span className="info-value"> Syria</span>
          </span>
        </li>
      </ul>
    </div>
  );
  const renderContent = () => (
    <div className="container pt-12">
      <Title title="Get in Touch" />
      <div className={`row ${isTabletOrMobile ? "" : "flex justify-center"}`}>
        {renderContactInfo()}
        {renderForm()}
      </div>
    </div>
  );

  return (
    <section className="contact" id="contact">
      {renderContent()}
    </section>
  );
};

export default Contact;
