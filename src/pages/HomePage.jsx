import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

const HomePage = () => (
  <>
    <Hero />
    <div className="flex flex-col xl:flex-row gap-4">
      <About />
      <Projects />
    </div>
    <Contact />
  </>
);

export default HomePage;
