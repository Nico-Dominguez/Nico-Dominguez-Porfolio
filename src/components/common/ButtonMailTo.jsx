import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      className="block text-center hover:underline py-2 px-4 w-full sm:text-left text-blue-800 dark:text-blue-50"
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
