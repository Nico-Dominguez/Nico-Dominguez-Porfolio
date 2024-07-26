import React from "react";
import { motion } from "framer-motion";
import Header from "./layout/Header";
import Gallery from "./layout/Gallery";
import NavigationButtons from "./layout/NavigationButtons";
import Modal from "./layout/Modal";
import useGallery from "./hooks/useGallery";

const ProjectLayout = ({
  title,
  children,
  galleryItems,
  prevLink,
  nextLink,
}) => {
  const {
    selectedItem,
    selectedIndex,
    handleItemClick,
    handleCloseModal,
    handlePrevItem,
    handleNextItem,
  } = useGallery(galleryItems);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 flex flex-col gap-4"
    >
      <Header title={title} />
      {children}
      <Gallery items={galleryItems} onItemClick={handleItemClick} />
      {selectedItem && (
        <Modal
          item={selectedItem}
          index={selectedIndex}
          onClose={handleCloseModal}
          onPrev={handlePrevItem}
          onNext={handleNextItem}
        />
      )}
      <NavigationButtons prevLink={prevLink} nextLink={nextLink} />
    </motion.div>
  );
};

export default ProjectLayout;
