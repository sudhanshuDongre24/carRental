import React from "react";
import { IconQuote } from "@tabler/icons-react";
import Img2 from "../../assests/testimonials/pfp1.jpg";
import Img3 from "../../assests/testimonials/pfp2.jpg";
import "./style.scss";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Reviewed by People</h4>
              <h2>Client's Testimonials</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our Clients have experienced
                out services and results, and they're eager to share their
                positive experience with you.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user-img" />
                    <span>
                      <h4>Harry Potter</h4>
                      <p>Mumbai</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <IconQuote width={60} height={60} />
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user-img" />
                    <span>
                      <h4>Ron Wembly</h4>
                      <p>Delhi</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
