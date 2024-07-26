import React from "react";
import { useParams, Link } from "react-router-dom";
import GRNPalmetto from "../components/projects/GRNPalmetto";
import GRNAtlantaNorth from "../components/projects/GRNAtlantaNorth";
import GRNDublin from "../components/projects/GRNDublin";

const ProjectPage = () => {
  const { projectId } = useParams();

  const renderProject = () => {
    switch (projectId) {
      case "grn-palmetto":
        return <GRNPalmetto />;
      case "grn-atlanta-north":
        return <GRNAtlantaNorth />;
      case "grn-dublin":
        return <GRNDublin />;
      default:
        return (
          <div>Project not found. Please check the URL and try again.</div>
        );
    }
  };

  return (
    <div className="project-page">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to home
      </Link>
      {renderProject()}
    </div>
  );
};

export default ProjectPage;
