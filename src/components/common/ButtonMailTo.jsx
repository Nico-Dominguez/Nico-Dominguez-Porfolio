import React from "react";

const ButtonMailto = ({ mailto, label, className = "", ...props }) => {
  return (
    <a
      href={mailto}
      className={`mailto-link ${className}`}
      target="_blank"
      {...props}
    >
      {label}
    </a>
  );
};

export default ButtonMailto;
