import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaYoutube } from "react-icons/fa";

const Gallery = ({ items, onItemClick }) => {
  const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-8"
    >
      <div className="overflow-x-auto scrollbar scrollbar-thumb-blue-700">
        <div className="flex gap-4 pb-4" style={{ minWidth: "max-content" }}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer w-64 h-48 bg-blue-200 flex-shrink-0 relative overflow-hidden rounded-lg shadow-md"
              onClick={() => onItemClick(item, index)}
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              )}
              {item.type === "youtube" && (
                <div className="w-full h-full relative">
                  <img
                    src={getYouTubeThumbnail(item.videoId)}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <FaYoutube className="text-4xl text-red-600" />
                  </div>
                </div>
              )}
              {item.type === "pdf" && (
                <div className="w-full h-full flex items-center justify-center bg-blue-100">
                  <FaFilePdf className="text-4xl text-blue-600" />
                  <span className="ml-2 font-semibold">{item.alt}</span>
                </div>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
              >
                <span className="text-white font-semibold text-center px-2">
                  {item.alt}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
