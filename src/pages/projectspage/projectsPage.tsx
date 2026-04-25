import React from "react";
import './projectsPage.css'

import projectContent from '../../website-content/projects.json'
import ProjectCard from "../../components/cards/projectCard";

import sh9Assets from "../../assets/projects/slaughterhouse9/slaughterhouse9_index";
import gp03Assets from "../../assets/projects/gremlinParty03/gremlinParty03_index";
import cafeGameAssets from "../../assets/projects/cafeGame/cafeGame_index";
import grudgeAssets from "../../assets/projects/grudgeGame/grudgeGame_index";



const ProjectsPage: React.FC = () => {
  
  return (
    <div className="container">
      <h1 className="title">Projects</h1>
      <div className="project-container">
        <ProjectCard textContent={projectContent["Slaughterhouse 9"]} thumbnail={sh9Assets.sh9Thumbnail} pictures={sh9Assets.sh9Carousel}/>
        <ProjectCard textContent={projectContent["Gremlin Party 03"]} thumbnail={gp03Assets.gp03Logo} pictures={gp03Assets.gpCarousel}/>
        <ProjectCard textContent={projectContent["Cafe Game"]} thumbnail={cafeGameAssets.cafeGameThumbnail}/>
        <ProjectCard textContent={projectContent["Holdin' Grudges"]} thumbnail={grudgeAssets.grudgeThumbnail} video={grudgeAssets.grudgeGameVideo}/>
      </div>
    </div>
  );
};

export default ProjectsPage;