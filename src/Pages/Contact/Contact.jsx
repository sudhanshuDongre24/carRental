import React from "react";
import {
  IconLocation,
  IconMail,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons-react";
import { Footer, HeroPages } from "../../Components";
import "./style.scss";

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional infomation?</h2>
              <p>
                A mulitfacete professional skilled in multiple field of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>

              <a href="/">
                <IconPhone /> &nbsp; (+91) 10101001
              </a>

              <a href="/">
                <IconMail /> &nbsp; carRental@gmail.com
              </a>
              <a href="/">
                <IconLocation /> &nbsp; Nagpur Maharashtra
              </a>
            </div>

            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder="E.g:'Joe Doe' "></input>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com "
                ></input>
                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here..."></textarea>{" "}
                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>{" "}
              <span>
                <IconPhone width={40} height={40} />
                <h3>(+91 1010101001)</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Contact;
