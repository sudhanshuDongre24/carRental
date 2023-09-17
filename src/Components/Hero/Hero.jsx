import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import BgShape from "../../assests/hero/hero-bg.png";
import HeroCar from "../../assests/hero/main-car.png";
import "./style.scss";

const Hero = () => {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    console.log("yes");
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };

    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero--content">
            <div className="hero--content__text">
              <h4>Plan You trip Now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the Car of your dreams. Unbeatable price, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero--content__text--btns">
                <Link
                  // onClick={bookBtn}
                  className="hero--content__text--btns--book-ride"
                  to="/"
                >
                  {`Book Ride`} <IconCircleCheck />
                </Link>
                <Link className="hero--content__text--btns__learn-more" to="/">
                  Learn More <IconChevronRight />
                </Link>
              </div>
            </div>

            <img
              src={HeroCar}
              alt="car-img"
              className="hero--content__car-img"
            />
          </div>
        </div>

        <div
          onClick={scrollToTop}
          className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
};

export default Hero;
