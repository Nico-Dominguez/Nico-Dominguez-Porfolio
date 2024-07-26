import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import ButtonMailto from "../common/ButtonMailTo";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="p-4 mb-3 relative">
      <div className="container mx-auto flex items-center gap-4">
        <Link
          to="/"
          className="text-blue-700 dark:text-blue-50 font-bold text-xl mr-auto"
        >
          Nicolas Dominguez
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <ButtonMailto
            label="Email Me"
            mailto="mailto:98nicodominguez@gmail.com"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors duration-200"
          />
          <a
            href="/Nicolas-Dominguez--Resume.docx.pdf"
            className="text-blue-700 hover:text-blue-900 dark:text-white hover:underline"
          >
            Resume
          </a>
        </div>

        {/* Theme toggle button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-700 dark:text-blue-50 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-blue-700 dark:text-blue-50 mb-8"
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-4">
            <ButtonMailto
              label="Email Me"
              mailto="mailto:98nicodominguez@gmail.com"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors duration-200"
            />
            <a
              href="/Nicolas-Dominguez--Resume.docx.pdf"
              className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 text-blue-800 dark:text-white rounded-lg text-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
