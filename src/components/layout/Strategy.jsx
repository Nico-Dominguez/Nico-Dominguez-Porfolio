import { motion } from "framer-motion";
import React from "react";

const Strategy = ({ title, icon, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    className="md:w-1/2 flex gap-4 flex-col p-6 rounded bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-900 dark:to-indigo-900 shadow-xl backdrop-blur-lg border-2 border-blue-500"
  >
    <div className="flex items-center justify-start mb-4 text-white">
      {icon && <span className="text-2xl">{icon}</span>}
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
    {children}
  </motion.div>
);

export default Strategy;
