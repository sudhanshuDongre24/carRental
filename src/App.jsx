import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { About, Contact, Home, Models, Team, TestimonialsPage } from "./Pages";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="models" element={<Models />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
