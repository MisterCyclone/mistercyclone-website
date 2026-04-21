import React from "react";

import projectContent from '../website-content/projects.json'
import ProjectCard from "../components/cards/projectCard";

const sh9Section = projectContent["Slaughterhouse 9"];
const gp64Section = projectContent["Gremlin Party 64"];
const cafegameSection = projectContent["Cafe Game"];
const grudgeSection = projectContent["Holdin' Grudges"];


const ProjectsPage: React.FC = () => {
  
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="project-container">
        <ProjectCard {...sh9Section}/>
        <ProjectCard {...gp64Section}/>
        <ProjectCard {...cafegameSection}/>
        <ProjectCard {...grudgeSection}/>
      </div>
    </div>
  );
};

export default ProjectsPage;