import React from "react";
import { Footer, HeroPages } from "../../Components";
import Person1 from "../../assests/team/1.png";
import Person2 from "../../assests/team/2.png";
import Person3 from "../../assests/team/3.png";
import Person4 from "../../assests/team/4.png";
import Person5 from "../../assests/team/5.png";
import Person6 from "../../assests/team/6.png";
import { IconPhone } from "@tabler/icons-react";
import "./style.scss";

const Team = () => {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="container">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team;
