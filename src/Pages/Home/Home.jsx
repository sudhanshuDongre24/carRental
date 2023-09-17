import React from "react";
import {
  Banner,
  BookCar,
  ChooseUs,
  Download,
  Faq,
  Footer,
  Hero,
  PlanTrip,
  Testimonials,
} from "../../Components";

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
