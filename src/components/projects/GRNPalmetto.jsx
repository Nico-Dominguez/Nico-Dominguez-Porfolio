import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useGallery from "../hooks/useGallery";
import Header from "../layout/Header";
import ProjectInfo from "../layout/ProjectInfo";
import Gallery from "../layout/Gallery";
import Modal from "../layout/Modal";
import Strategy from "../layout/Strategy";
import Result from "../layout/Result";
import NavigationButtons from "../layout/NavigationButtons";
import { FaLightbulb, FaChartLine } from "react-icons/fa";

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
      className="p-6 flex flex-col gap-8 min-h-screen"
    >
      <Header title="GRN Palmetto" />
      <ProjectInfo
        role="Marketing Communications Specialist"
        date="January 2020 - March 2024"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 leading-relaxed"
        >
          At GRN Palmetto, where I spent over four years, I dove into research
          and analysis to understand their audience and competitors. I crafted a
          brand strategy focused on simplicity, authenticity, and consistency.
          This included designing a new logo and establishing a cohesive visual
          identity and tone of voice. The result? A more recognizable brand with
          heightened awareness and customer engagement.
        </motion.p>
      </ProjectInfo>
      <Gallery items={galleryItems} onItemClick={handleItemClick} />
      <AnimatePresence>
        {selectedItem && (
          <Modal
            item={selectedItem}
            index={selectedIndex}
            onClose={handleCloseModal}
            onPrev={handlePrevItem}
            onNext={handleNextItem}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col md:flex-row gap-8">
        <Strategy
          title="The Strategy"
          icon={<FaLightbulb className="text-yellow-400 flex mr-2 mb-1" />}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 leading-relaxed mb-4"
          >
            Joining GRN Palmetto, I took on the task of crafting a fresh brand
            strategy that truly reflected the company's essence. I started by
            understanding our audience, analyzing competitors, and keeping up
            with industry trends. With these insights, I created engaging
            content that drew customers in.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 leading-relaxed mb-4"
          >
            I used key visual elements like the logo, color scheme, and tone of
            voice to clearly communicate our brand identity. By producing
            distinctive videos and matching them with job post graphics, I
            ensured a cohesive brand image. This approach included consistent
            colors and a unified tone, which, along with engaging content like
            flyers, polls, and surveys, led to an impressive 800% growth in our
            follower count over three years.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 leading-relaxed"
          >
            To further connect with our audience, I actively sought customer
            feedback through surveys, LinkedIn polls, and targeted emails. These
            efforts provided valuable insights into customer preferences and
            allowed us to tailor our strategies for better engagement and
            satisfaction.
          </motion.p>
        </Strategy>
        <Result
          title="The Result"
          icon={<FaChartLine className="text-green-400" />}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4"
          >
            <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
              Social Media Growth
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Engaged the target audience and fostered community growth,
              resulting in an 800% increase in follower count over 4 years.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
              Marketing Optimization
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Used data-driven strategies to improve lead generation, web
              traffic, and promotional success. Applied performance metrics to
              refine campaigns and drive impactful results.
            </p>
          </motion.div>
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
