import React from "react";
import './projectsPage.css'

import cafegameThumbnail from '../../assets/cafe-game-thumbnail.jpg'
import gp03_logo from '../../assets/gp03_logo.png'
import sh9Thumbnail from '../../assets/SH9_thumbnail.jpg'
import grudgeThumbnail from '../../assets/grudge.png'

import projectContent from '../../website-content/projects.json'
import ProjectCard from "../../components/cards/projectCard";

const sh9Section = projectContent["Slaughterhouse 9"];
const gp64Section = projectContent["Gremlin Party 03"];
const cafegameSection = projectContent["Cafe Game"];
const grudgeSection = projectContent["Holdin' Grudges"];


const ProjectsPage: React.FC = () => {
  
  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="project-container">
        <ProjectCard textContent={sh9Section} thumbnail={sh9Thumbnail}/>
        <ProjectCard textContent={gp64Section} thumbnail={gp03_logo}/>
        <ProjectCard textContent={cafegameSection} thumbnail={cafegameThumbnail}/>
        <ProjectCard textContent={grudgeSection} thumbnail={grudgeThumbnail}/>
      </div>
    </div>
  );
};

export default ProjectsPage;