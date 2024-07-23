import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      className="text-blue-700 hover:underline dark:text-blue-50 hover:dark:text-blue-500"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
