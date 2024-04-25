import React from "react";

function ProjectItem({ name, about, technologies }) {
  // Check if technologies is undefined or null, if so, set it to an empty array
  const techList = technologies || [];

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techList.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
