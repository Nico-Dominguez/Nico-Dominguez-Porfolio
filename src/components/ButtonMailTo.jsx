import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      className="block text-center sm:text-left hover:underline text-blue-800 dark:text-blue-50 dark:hover:text-blue-500 sm:py-2 px-4 w-full"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      target="_blank"
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
