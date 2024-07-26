import { motion } from "framer-motion";

const Result = ({ title, children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    className="md:w-1/2 flex gap-4 flex-col p-6 rounded bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 shadow-xl backdrop-blur-lg border-2 border-blue-500"
  >
    <h1 className="text-2xl font-bold mb-4">{title}</h1>
    {children}
  </motion.div>
);

export default Result;
