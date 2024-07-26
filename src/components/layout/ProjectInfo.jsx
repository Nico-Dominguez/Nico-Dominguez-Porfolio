import { motion } from "framer-motion";

const ProjectInfo = ({ children, role, date }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col-reverse items-center gap-6 lg:flex-row-reverse p-6 rounded bg-blue-800 dark:bg-blue-50 dark:bg-opacity-10 backdrop-blur-lg shadow-xl border-2 border-blue-500"
  >
    <div className="lg:w-1/2">{children}</div>
    <div className="w-1/2 flex flex-col text-left ml-10 gap-5 lg:gap-14 justify-center">
      <div>
        <h3 className="font-bold text-xl lg:text-2xl">My Role:</h3>
        <p className="italic font-serif">{role}</p>
      </div>
      <div>
        <h3 className="font-bold text-xl lg:text-2xl">Date:</h3>
        <p className="italic font-serif">{date}</p>
      </div>
    </div>
  </motion.div>
);

export default ProjectInfo;
