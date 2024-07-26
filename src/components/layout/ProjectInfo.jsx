import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaCalendarAlt } from "react-icons/fa";

const ProjectInfo = ({ children, role, date }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse p-6 rounded-lg bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-900 dark:to-indigo-900 backdrop-blur-lg shadow-xl border-2 border-blue-400 dark:border-blue-600"
    >
      <motion.div
        variants={itemVariants}
        className="lg:w-1/2 text-white dark:text-gray-200"
      >
        {children}
      </motion.div>
      <div className="lg:w-1/2 flex flex-col text-left lg:ml-10 gap-5 justify-center">
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-2">
            <FaUserTie className="text-blue-500 mr-2 text-xl" />
            <h3 className="font-bold text-xl lg:text-2xl text-blue-600 dark:text-blue-400">
              My Role
            </h3>
          </div>
          <p className="italic font-serif text-gray-700 dark:text-gray-300">
            {role}
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-2">
            <FaCalendarAlt className="text-blue-500 mr-2 text-xl" />
            <h3 className="font-bold text-xl lg:text-2xl text-blue-600 dark:text-blue-400">
              Date
            </h3>
          </div>
          <p className="italic font-serif text-gray-700 dark:text-gray-300">
            {date}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectInfo;
