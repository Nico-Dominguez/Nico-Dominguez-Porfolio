import { motion } from "framer-motion";

const Gallery = ({ items, onItemClick }) => (
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
            className="cursor-pointer w-64 h-48 bg-blue-200 flex-shrink-0"
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
              <div className="w-full h-full flex items-center justify-center bg-red-100">
                <span>YouTube: {item.alt}</span>
              </div>
            )}
            {item.type === "pdf" && (
              <div className="w-full h-full flex items-center justify-center bg-blue-100">
                <span>{item.alt}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Gallery;
