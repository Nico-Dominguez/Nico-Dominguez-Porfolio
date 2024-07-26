import { useState, useEffect } from "react";

export const useGallery = (initialGalleryItems = []) => {
  const [galleryItems] = useState(initialGalleryItems);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedIndex(null);
  };

  const handlePrevItem = () => {
    const newIndex =
      (selectedIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedItem(galleryItems[newIndex]);
    setSelectedIndex(newIndex);
  };

  const handleNextItem = () => {
    const newIndex = (selectedIndex + 1) % galleryItems.length;
    setSelectedItem(galleryItems[newIndex]);
    setSelectedIndex(newIndex);
  };

  return {
    galleryItems,
    selectedItem,
    selectedIndex,
    handleItemClick,
    handleCloseModal,
    handlePrevItem,
    handleNextItem,
  };
};

export default useGallery;
