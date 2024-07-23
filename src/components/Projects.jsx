import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-blue-700 p-6 shadow-lg grid gap-4 rounded" id="projects">
      <h1 className="font-serif italic text-xl font-bold">Work Experience</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        <Link
          to="/project/grn-palmetto"
          className="p-6 grid gap-4 text-blue-900 transition ease-in bg-blue-50 hover:bg-yellow-500 duration-300 hover:text-blue-50 rounded "
        >
          <h3 className="font-bold">GRN Palmetto</h3>
          GRN Palmetto was looking for a reimagined company branding that
          delivered a consistent image to the market.
        </Link>

        <Link
          to="/project/grn-atlanta-north"
          className="p-6 grid gap-4 text-blue-900 transition ease-in bg-blue-50 hover:bg-indigo-800 duration-300 hover:text-blue-50 rounded"
        >
          <h3 className="font-bold">GRN Atlanta North</h3>
          GRN Atlanta North was looking for a reimagined company branding that
          delivered a consistent image to the market.
        </Link>

        <Link
          to="/project/grn-dublin"
          className="p-6 grid gap-4 text-blue-900 transition ease-in bg-blue-50 hover:bg-rose-800 duration-300 hover:text-blue-50 rounded "
        >
          <h3 className="font-bold">GRN Dublin</h3>
          GRN Dublin approached me with the challenge of creating marketing
          content that accurately reflected their brand identity.
        </Link>
      </div>
    </div>
  );
};

export default Projects;
