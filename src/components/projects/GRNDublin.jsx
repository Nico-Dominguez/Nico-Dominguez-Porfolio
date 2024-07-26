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
import { FaChartLine } from "react-icons/fa";

const GRNDublin = () => {
  const initialGalleryItems = [
    { type: "image", src: "/dublin/dub-1.webp", alt: "Image 1" },
    { type: "pdf", src: "/dublin/metro-eng.pdf", alt: "PDF 3" },
    { type: "image", src: "/dublin/dub-2.webp", alt: "Image 2" },
    { type: "image", src: "/dublin/dub-4.webp", alt: "Image 4" },
    { type: "image", src: "/dublin/Facebook-Header.webp", alt: "Image 4" },
    { type: "pdf", src: "/dublin/GRN-Dublin-Services.pdf", alt: "PDF 1" },
    { type: "pdf", src: "/dublin/grndublinimpact.pdf", alt: "PDF 2" },
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
      <Header title="GRN Dublin" />
      <ProjectInfo
        role="Digital Marketing Specialist"
        date="August 2022 - Present"
      >
        <p>
          While working at GRN Palmetto, GRN Dublin noticed my impactful work
          and reached out for help with their branding. Eager for the challenge,
          I jumped in to revitalize their brand and create a consistent image. I
          started with thorough industry research and worked closely with
          President Bill Owad to develop content that truly captured their
          company’s essence, successfully refreshing their brand identity.
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
        <Strategy title="Marketing Content">
          <p>
            Revamping GRN Dublin’s social media and marketing content was both
            exciting and challenging. They wanted a complete content rebranding
            with standout graphics to differentiate them from competitors. My
            goal was to create marketing content that aligned with their brand
            strategy and resonated with the life sciences and biomedical
            sectors, helping them attract top companies and candidates.
          </p>
          <p>
            I started by designing a job posting template that captured Dublin's
            brand with consistent use of their logo and colors. I ensured these
            posts were visible and cohesive by regularly updating their LinkedIn
            profile.
          </p>
          <p>
            In addition, I created a variety of marketing materials, including
            flyers, infographics, and detailed job packets for C-level
            positions. This project was a valuable experience, enhancing my
            skills in client collaboration and content creation for large
            organizations.
          </p>
        </Strategy>
        <Result
          title="The Result"
          icon={<FaChartLine className="text-green-400" />}
        >
          <p>
            Developed and executed marketing campaigns: Designed and implemented
            effective marketing strategies, resulting in a 21.8% engagement rate
            on LinkedIn over a 6-month period.
          </p>
          <p>
            Implemented social media strategies: Enhanced brand visibility and
            market penetration by 22.9% through A/B testing and post-scheduling,
            demonstrating effective client engagement and communication.
          </p>
          <p>
            Created marketing assets: Produced videos, graphics, and marketing
            materials using Adobe Creative Suite, aligning with modern UI trends
            and showcasing proficiency in tools essential for high-quality
            presentations.
          </p>
        </Result>
      </div>
      <NavigationButtons
        prevLink="/project/grn-atlanta-north"
        nextLink="/project/grn-palmetto"
      />
    </motion.div>
  );
};

export default GRNDublin;
