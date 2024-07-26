import React from "react";
import { motion } from "framer-motion";
import useGallery from "../hooks/useGallery";
import Header from "../layout/Header";
import ProjectInfo from "../layout/ProjectInfo";
import Gallery from "../layout/Gallery";
import Modal from "../layout/Modal";
import Strategy from "../layout/Strategy";
import Result from "../layout/Result";
import NavigationButtons from "../layout/NavigationButtons";

const GRNAtlantaNorth = () => {
  const initialGalleryItems = [
    { type: "image", src: "/atlanta/atl-2.webp", alt: "Image 1" },
    { type: "image", src: "/atlanta/atl-1.webp", alt: "Image 2" },
    { type: "image", src: "/atlanta/Tagline.webp", alt: "Image 3" },
    { type: "image", src: "/atlanta/atl-3.webp", alt: "Image 4" },
    { type: "image", src: "/atlanta/atlinfo1.webp", alt: "Image 5" },
    { type: "image", src: "/atlanta/atlinfo2.webp", alt: "Image 6" },
    { type: "image", src: "/atlanta/atlinfo3.webp", alt: "Image 7" },
    { type: "youtube", videoId: "hgEbQWhl1Bc", alt: "YouTube Video" },
  ];

  const {
    galleryItems,
    selectedItem,
    selectedIndex,
    handleItemClick,
    handleCloseModal,
    handlePrevItem,
    handleNextItem,
  } = useGallery(initialGalleryItems);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 flex flex-col gap-4"
    >
      <Header title="GRN Atlanta North" />
      <ProjectInfo role="Digital Marketer" date="November 2022 - March 2023">
        <p>
          Redesigning the brand for a GRN franchise office was an exciting
          challenge. I started by researching their target audience, industry
          trends, and competitors. This led to a unique brand strategy that
          captured the office's essence and set them apart. I designed a new
          logo that conveyed professionalism and expertise, and created brand
          guidelines to ensure consistency across all materials. By the end, GRN
          Atlanta North had a modern look that resonated with its audience and
          reflected its values and mission.
        </p>
      </ProjectInfo>
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
      <div className="flex flex-col md:flex-row gap-4">
        <Strategy title="Logo Redesign">
          <p>
            One of the goals was to redesign the brand identity. We created a
            simple, bold logo featuring a shopping cart, symbolizing the
            industry. The new logo conveyed quality, precision, and innovation
            while being visually appealing and memorable. This redesign helped
            the company stand out in a crowded market and establish a strong
            brand identity that resonated with their target audience.
          </p>
        </Strategy>

        <Result title="Marketing Content">
          <p>
            I harmonized marketing content with ATL North's brand strategy,
            producing flyers, videos, and banners that incorporated the
            redesigned logo for a consistent brand image. This effort aimed to
            cultivate customer loyalty and drive sales, resulting in a tangible
            boost to the company's bottom line.
          </p>
        </Result>
      </div>
      <NavigationButtons
        prevLink="/project/grn-palmetto"
        nextLink="/project/grn-dublin"
      />
    </motion.div>
  );
};

export default GRNAtlantaNorth;

// const initialGalleryItems = [
//   { type: "image", src: "/atlanta/atl-2.webp", alt: "Image 1" },
//   { type: "image", src: "/atlanta/atl-1.webp", alt: "Image 2" },
//   { type: "image", src: "/atlanta/Tagline.webp", alt: "Image 3" },
//   { type: "image", src: "/atlanta/atl-3.webp", alt: "Image 4" },
//   { type: "image", src: "/atlanta/atlinfo1.webp", alt: "Image 5" },
//   { type: "image", src: "/atlanta/atlinfo2.webp", alt: "Image 6" },
//   { type: "image", src: "/atlanta/atlinfo3.webp", alt: "Image 7" },
//   { type: "youtube", videoId: "hgEbQWhl1Bc", alt: "YouTube Video" },
// ];
