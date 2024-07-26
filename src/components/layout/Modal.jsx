import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const Modal = ({ item, index, onClose, onPrev, onNext }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
  >
    <div className="max-w-3xl max-h-[80vh] relative">
      <div className="absolute top-[-70px] right-4 flex items-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="font-bold text-4xl px-3 py-1 shadow-xl backdrop-blur-lg border-2 border-blue-500"
          onClick={onPrev}
        >
          <FaArrowLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="font-bold text-4xl px-3 py-1 shadow-xl backdrop-blur-lg border-2 border-blue-500"
          onClick={onNext}
        >
          <FaArrowRight />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="font-bold text-4xl px-3 py-1 shadow-xl backdrop-blur-lg border-2 border-blue-500"
          onClick={onClose}
        >
          <FaTimes />
        </motion.button>
      </div>
      {item.type === "image" && (
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-[80vh] max-h-[80vh] overflow-y-auto"
        />
      )}
      {item.type === "pdf" && (
        <iframe
          src={item.src}
          title={item.alt}
          style={{ minHeight: "50vh", minWidth: "50vw", margin: "auto" }}
        />
      )}
      {item.type === "youtube" && (
        <div className="flex flex-col items-center">
          <div className="w-[80vh] h-[80vh] bg-blue-200">
            <span className="text-2xl">YouTube Video: {item.alt}</span>
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${item.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  </motion.div>
);

export default Modal;
