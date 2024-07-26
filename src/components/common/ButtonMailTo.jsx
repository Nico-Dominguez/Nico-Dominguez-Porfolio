import React from "react";

const ButtonMailto = ({ mailto, label, className = "", ...props }) => {
  return (
    <a href={mailto} className={`mailto-link ${className}`} {...props}>
      {label}
    </a>
  );
};

export default ButtonMailto;
