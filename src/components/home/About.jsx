import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaPaintBrush, FaChartLine } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-tr from-blue-700 to-blue-500 p-8 shadow-lg rounded-lg overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="font-serif italic text-4xl font-bold mb-6 text-white"
        variants={childVariants}
      >
        About me
      </motion.h1>

      <motion.div className="space-y-6" variants={childVariants}>
        <div className="flex items-start space-x-4">
          <FaUserTie className="text-white text-2xl mt-1 flex-shrink-0" />
          <p className="leading-7 font-light text-white">
            Hi! I'm a marketing professional with{" "}
            <span className="underline underline-offset-4 decoration-wavy decoration-yellow-300">
              four plus years
            </span>{" "}
            of experience. In my previous roles, I planned and executed
            successful marketing campaigns on social media and through content
            marketing. My work has boosted brand awareness, generated leads, and{" "}
            <span className="font-bold">increased revenue</span>.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <FaPaintBrush className="text-white text-2xl mt-1 flex-shrink-0" />
          <p className="leading-7 font-light text-white">
            I'm adept in{" "}
            <span className="underline underline-offset-4 decoration-wavy decoration-yellow-300">
              graphic design
            </span>{" "}
            creating eye-catching visuals that enhance campaigns. I'm excited to
            bring my <span className="font-bold">creativity</span> and
            enthusiasm to a dynamic marketing team.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <FaChartLine className="text-white text-2xl mt-1 flex-shrink-0" />
          <p className="leading-7 font-light text-white">
            I'm passionate about using innovative strategies to drive growth and
            make a <span className="font-bold">meaningful impact</span>.
          </p>
        </div>
      </motion.div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
    </motion.div>
  );
};

export default About;
