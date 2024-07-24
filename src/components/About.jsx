import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-700 to-blue-500 p-6 shadow-lg flex flex-col gap-4 rounded">
      <h1 className="font-serif italic text-2xl font-bold">About me</h1>
      <p className="leading-[1.8rem] font-light">
        Hi! I'm a marketing professional with{" "}
        <span className="underline underline-offset-[5px] decoration-wavy">
          three years
        </span>{" "}
        of experience. In my previous roles, I planned and executed successful
        marketing campaigns on social media and through content marketing. My
        work has boosted brand awareness, generated leads, and{" "}
        <span className="font-bold">increased revenue</span>.
      </p>
      <p className="leading-[1.8rem] font-light">
        I'm adept in{" "}
        <span className="underline underline-offset-[5px] decoration-wavy">
          graphic design
        </span>{" "}
        creating eye-catching visuals that enhance campaigns. I'm excited to
        bring my <span className="font-bold">creativity</span> and enthusiasm to
        a dynamic marketing team. I'm passionate about using innovative
        strategies to drive growth and make a{" "}
        <span className="font-bold">meaningful impact</span>.
      </p>
    </div>
  );
};

export default About;
