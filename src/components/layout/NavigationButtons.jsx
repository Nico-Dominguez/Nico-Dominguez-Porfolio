import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationButtons = ({ prevLink, nextLink }) => (
  <div className="flex w-full gap-4 justify-center mt-7">
    <Link
      to={prevLink}
      className="w-1/4 px-4 py-2 bg-blue-700 rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-700/50"
    >
      <FaArrowLeft className="inline mr-2" /> Previous
    </Link>
    <Link
      to={nextLink}
      className="w-1/4 px-4 py-2 bg-blue-700 rounded hover:bg-blue-600 transition duration-300 text-center shadow-lg shadow-blue-700/50"
    >
      Next <FaArrowRight className="inline ml-2" />
    </Link>
  </div>
);

export default NavigationButtons;
