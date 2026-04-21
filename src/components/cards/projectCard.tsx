import React from "react";
import ProjectTag from "../multiples/project-tag";

import './project-card.css'

interface ProjectCardProps {
  title?: string;
  description?: string;
  efforts?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, efforts, tags}) => {

  return (
    <div className="project-card">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{efforts}</p>
      <div className="project-tag-container">
        {tags.map((tag) => (
          <ProjectTag label={tag}/>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard;