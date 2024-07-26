import { motion } from "framer-motion";

const Header = ({ title }) => (
  <motion.h1
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-300"
  >
    {title}
  </motion.h1>
);

export default Header;
