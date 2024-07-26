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

const GRNPalmetto = () => {
  const initialGalleryItems = [
    { type: "image", src: "/palmetto/pal-2.webp", alt: "Image 1" },
    { type: "image", src: "/palmetto/pal-3.webp", alt: "Image 2" },
    {
      type: "image",
      src: "/palmetto/palmetto-testimonial.webp",
      alt: "Image 3",
    },
    { type: "youtube", videoId: "uN-TuCufmZ4", alt: "YouTube Video" },
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
      <Header title="GRN Palmetto" />
      <ProjectInfo
        role="Marketing Communications Specialist"
        date="Janurary 2020 - March 2024"
      >
        <p>
          At GRN Palmetto, where I spent over four years, I dove into research
          and analysis to understand their audience and competitors. I crafted a
          brand strategy focused on simplicity, authenticity, and consistency.
          This included designing a new logo and establishing a cohesive visual
          identity and tone of voice. The result? A more recognizable brand with
          heightened awareness and customer engagement.
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
        <Strategy title="The Strategy">
          <p>
            Joining GRN Palmetto, I took on the task of crafting a fresh brand
            strategy that truly reflected the company's essence. I started by
            understanding our audience, analyzing competitors, and keeping up
            with industry trends. With these insights, I created engaging
            content that drew customers in.
          </p>
          <p>
            I used key visual elements like the logo, color scheme, and tone of
            voice to clearly communicate our brand identity. By producing
            distinctive videos and matching them with job post graphics, I
            ensured a cohesive brand image. This approach included consistent
            colors and a unified tone, which, along with engaging content like
            flyers, polls, and surveys, led to an impressive 800% growth in our
            follower count over three years.
          </p>
          <p>
            To further connect with our audience, I actively sought customer
            feedback through surveys, LinkedIn polls, and targeted emails. These
            efforts provided valuable insights into customer preferences and
            allowed us to tailor our strategies for better engagement and
            satisfaction.
          </p>
        </Strategy>
        <Result title="The Result">
          <p>
            Implemented effective social media strategies: Engaged the target
            audience and fostered community growth, resulting in an 800%
            increase in follower count over 4 years.
          </p>
          <p>
            Optimized marketing efforts: Used data-driven strategies to improve
            lead generation, web traffic, and promotional success. Applied
            performance metrics to refine campaigns and drive impactful results.
          </p>
        </Result>
      </div>
      <NavigationButtons
        prevLink="/project/grn-dublin"
        nextLink="/project/grn-atlanta-north"
      />
    </motion.div>
  );
};

export default GRNPalmetto;
