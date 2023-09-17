import React from "react";
import "./style.scss";
import { IconMail, IconPhoneCall } from "@tabler/icons-react";
const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="footer-content">
          <ul className="footer-content__1">
            <li>
              <span>Car</span> Rental
            </li>

            <li>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </li>

            <li>
              <a href="tel:10001000100">
                <IconPhoneCall /> &nbsp; +91 10101001
              </a>
            </li>

            <li>
              <a href="mailto:carRental@gmail.com">
                <IconMail /> &nbsp; carRental@gmail.com
              </a>
            </li>

            <li>
              <a
                style={{ fontSize: "14px" }}
                target="_blank"
                rel="noreferrer"
                href="https://xpeedstudio.com/"
              >
                Design by CarStudio
              </a>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Company</li>
            <li>
              <a href="#home">India </a>
            </li>
            <li>
              <a href="#home">Carrers</a>
            </li>
            <li>
              <a href="#home">Mobile</a>
            </li>
            <li>
              <a href="#home">Blog </a>
            </li>
            <li>
              <a href="#home">How we Work</a>
            </li>
          </ul>

          <ul className="footer-content__2">
            <li>Working Hours</li>
            <li>Mon - Fri 9:00AM - 9:00PM </li>
            <li>Sat: 9:00AM - 7:00PM </li>
            <li>Sun: Closed</li>
          </ul>

          <ul className="footer-content__2">
            <li>Subscription</li>
            <li>
              <p>Subscribe your Email address for latest news & updates.</p>
            </li>

            <li>
              <input type="email" placeholder="Enter Email Address" />
            </li>
            <li>
              <button className="submit-email">Submit</button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
