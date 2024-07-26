import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

const ModalButton = ({ onClick, icon }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="font-bold text-4xl px-3 py-1 shadow-xl backdrop-blur-lg border-2 border-blue-500"
    onClick={onClick}
  >
    {icon}
  </motion.button>
);

const ModalContent = ({ item }) => {
  switch (item.type) {
    case "image":
      return (
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-[80vh] max-h-[80vh] overflow-y-auto"
        />
      );
    case "pdf":
      return (
        <iframe
          src={item.src}
          title={item.alt}
          className="min-h-[50vh] min-w-[50vw] m-auto"
        />
      );
    case "youtube":
      return (
        <div className="flex flex-col items-center">
          <img
            src={`https://img.youtube.com/vi/${item.videoId}/0.jpg`}
            alt={item.alt}
            className="w-[80vh] h-auto max-h-[80vh] object-contain"
          />
          <a
            href={`https://www.youtube.com/watch?v=${item.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      );
    default:
      return null;
  }
};

const Modal = ({ item, onClose, onPrev, onNext }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
  >
    <div className="max-w-3xl max-h-[80vh] relative">
      <div className="absolute top-[-70px] right-4 flex items-center space-x-4">
        <ModalButton onClick={onPrev} icon={<FaArrowLeft />} />
        <ModalButton onClick={onNext} icon={<FaArrowRight />} />
        <ModalButton onClick={onClose} icon={<FaTimes />} />
      </div>
      <ModalContent item={item} />
    </div>
  </motion.div>
);

export default Modal;
