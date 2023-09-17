import React from "react";
import { HeroPages, Footer } from "../../Components";
import CarImg1 from "../../assests/cars-big/audi-box.png";
import CarImg2 from "../../assests/cars-big/golf6-box.png";
import CarImg3 from "../../assests/cars-big/toyota-box.png";
import CarImg4 from "../../assests/cars-big/bmw-box.png";
import CarImg5 from "../../assests/cars-big/benz-box.png";
import CarImg6 from "../../assests/cars-big/passat-box.png";
import { IconCar, IconPhone, IconStar } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import "./style.scss";

const Models = () => {
  const CarDetails = [
    { img: CarImg1, name: "Audi A1", price: 45, brand: "Audi" },
    { img: CarImg2, name: "Golf 6", price: 37, brand: "VW" },
    { img: CarImg3, name: "Toyota", price: 30, brand: "Camry" },
    { img: CarImg4, name: "BMW 320", price: 35, brand: "ModernLine" },
    { img: CarImg5, name: "Mercedes", price: 50, brand: "Benz GLK" },
    { img: CarImg6, name: "VW Passat", price: 25, brand: "CC" },
  ];
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vechicle Models" />
        <div className="container">
          <div className="models-div">
            {CarDetails.map((car, id) => (
              <div key={id} className="models-div__box">
                <div key={id} className="models-div__box__img">
                  <img src={car.img} alt="car_img" />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{car.name}</p>
                        <span>
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                          <IconStar width={15} height={15} />
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>${car.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <IconCar /> &nbsp; {car.brand}
                      </span>

                      <span style={{ textAlign: "right" }}>
                        4/5 &nbsp; <IconCar />
                      </span>

                      <span>
                        <IconCar /> &nbsp; Manual
                      </span>

                      <span style={{ textAlign: "right" }}>
                        Diesel &nbsp; <IconCar />
                      </span>
                    </div>

                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2> Book a car by getting in touch with us</h2>
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

export default Models;
