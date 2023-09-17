import React from "react";
import { Footer, HeroPages, Testimonials } from "../../Components";
import { IconPhone } from "@tabler/icons-react";

const TestimonialsPage = () => {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonails" />
        <Testimonials />
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

export default TestimonialsPage;
