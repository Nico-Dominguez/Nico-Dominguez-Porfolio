import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import ButtonMailto from "./ButtonMailTo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="p-4 mb-3">
      <div className="container mx-auto flex items-center gap-4">
        <Link
          to="/"
          className="text-blue-700 dark:text-blue-50 font-bold text-xl mr-auto"
        >
          Nicolas Dominguez
        </Link>

        {/* Theme toggle button */}

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-700 dark:text-blue-50 focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          {/* ... (your existing mobile menu button code) ... */}
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ButtonMailto
            label="Email Me"
            mailto="mailto:98nicodominguez@gmail.com"
          />
          <a
            href="/Nicolas-Dominguez--Resume.docx.pdf"
            className="text-blue-700 hover:text-blue-900 dark:text-white hover:underline"
          >
            Resume
          </a>
        </div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded bg-blue-200 dark:bg-blue-800 text-gray-800 dark:text-gray-200"
        >
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <ButtonMailto
            label="Contact"
            mailto="mailto:98nicodominguez@gmail.com"
          />
          <a
            href="/Nicolas-Dominguez--Resume.docx.pdf"
            className="block text-center hover:underline py-2 px-4 w-full sm:text-left text-blue-800 dark:text-white"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
