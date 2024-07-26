import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";

const Projects = () => {
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
      className="bg-gradient-to-tl from-blue-700 to-blue-500 p-8 shadow-lg rounded-lg overflow-hidden relative"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="font-serif italic text-3xl font-bold text-white mb-6"
        variants={childVariants}
      >
        <FaBriefcase className="inline-block mr-2 mb-1" />
        Work Experience
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={childVariants}
      >
        <ProjectCard
          to="/project/grn-palmetto"
          title="GRN Palmetto"
          description="GRN Palmetto was looking for a reimagined company branding that delivered a consistent image to the market."
        />
        <ProjectCard
          to="/project/grn-atlanta-north"
          title="GRN Atlanta North"
          description="GRN Atlanta North was looking for a reimagined company branding that delivered a consistent image to the market."
        />
        <ProjectCard
          to="/project/grn-dublin"
          title="GRN Dublin"
          description="GRN Dublin approached me with the challenge of creating marketing content that accurately reflected their brand identity."
        />
      </motion.div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
    </motion.div>
  );
};

const ProjectCard = ({ to, title, description }) => (
  <motion.div
    className="h-full"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      to={to}
      className="flex flex-col h-full p-6 text-blue-900 transition-all ease-in-out duration-300 bg-blue-50 hover:bg-blue-800 hover:text-blue-50 rounded-lg shadow-md hover:shadow-xl"
    >
      <h3 className="font-bold text-xl flex items-center justify-between mb-4">
        {title}
        <FaArrowRight className="text-blue-500 group-hover:text-blue-200" />
      </h3>
      <p className="flex-grow">{description}</p>
    </Link>
  </motion.div>
);

export default Projects;
