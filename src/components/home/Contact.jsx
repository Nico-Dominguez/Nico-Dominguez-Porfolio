import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaTools } from "react-icons/fa";

const Contact = () => {
  const items = [
    { title: "Social Media Marketing" },
    { title: "Email Marketing" },
    { title: "SEO" },
    { title: "Project Management" },
    { title: "Interpersonal Communication Skills" },
    { title: "Adobe Creative Suite" },
    { title: "Content Creation" },
    { title: "Microsoft Suite" },
    { title: "Graphic Design" },
    { title: "Metric & Analytics" },
    { title: "SEM" },
    { title: "Web Design" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "Javascript" },
    { title: "React" },
    { title: "Wordpress" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
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
      className="flex flex-col-reverse lg:flex-row gap-4 rounded"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="lg:w-1/2 bg-gradient-to-tr from-blue-700 to-blue-500 p-8 rounded-lg shadow-lg overflow-hidden relative"
        variants={childVariants}
      >
        <motion.h1
          className="text-center sm:text-left font-bold italic font-serif text-3xl text-white mb-6"
          variants={childVariants}
        >
          Contact Me
        </motion.h1>
        <motion.div className="flex flex-col gap-6" variants={childVariants}>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-white text-2xl flex-shrink-0" />
            <div>
              <h2 className="font-bold text-xl text-white">Email</h2>
              <p className="text-lg text-blue-100">98nicodominguez@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-white text-2xl flex-shrink-0" />
            <div>
              <h2 className="font-bold text-xl text-white">Phone</h2>
              <p className="text-lg text-blue-100">803 587-5992</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-white text-2xl flex-shrink-0" />
            <div>
              <h2 className="font-bold text-xl text-white">LinkedIn</h2>
              <a
                href="https://www.linkedin.com/in/nnicodominguez/"
                className="text-lg text-blue-100 hover:text-blue-200 transition-colors duration-200"
              >
                nnicodominguez
              </a>
            </div>
          </div>
        </motion.div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
      </motion.div>
      <motion.div
        className="lg:w-1/2 bg-gradient-to-tl from-blue-700 to-blue-500 p-8 rounded-lg shadow-lg overflow-hidden relative"
        variants={childVariants}
      >
        <motion.h1
          className="text-center sm:text-left font-bold italic font-serif text-3xl text-white mb-6"
          variants={childVariants}
        >
          <FaTools className="inline-block mr-2 mb-1" />
          Skills
        </motion.h1>
        <motion.div className="flex flex-wrap gap-3" variants={childVariants}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="p-2 py-1 bg-blue-100 text-blue-800 rounded-full select-none font-bold border-2 border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.title}
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
