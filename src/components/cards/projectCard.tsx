import React from "react";
import ProjectTag from "../multiples/project-tag";
import './projectCard.css'

import { useState } from "react";
import useSound from "use-sound";
import onImageEnter from '../../assets/onImageEnterwav.wav';

import ImageCarousel from "../imageCarousel/imageCarousel";

interface ProjectCardTextProps {
  title?: string;
  timeFrame?: string;
  description?: string;
  efforts?: string;
  video?: string;
  tags?: string[];
  projectLink?: string;
}

interface ProjectCardProps {
  textContent?: ProjectCardTextProps;
  thumbnail?: string;
  pictures?: string[]; 
}


const ProjectCard: React.FC<ProjectCardProps> = ({textContent, thumbnail, pictures}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [randomPitch, setRandomPitch] = useState<number>(1);

  const [play] = useSound(onImageEnter, {
    playbackRate: randomPitch
  });
  
  const handlePitchPlay = () => {
    setRandomPitch(Number.parseFloat(((Math.random() * (1.1 - 0.9) + 0.9)).toFixed(1)));
    console.log(randomPitch)
    play();
  }

  return (
    <div className='project-card'>
      { textContent.title && <h1>{textContent.title}</h1>}
      { thumbnail && <img src={thumbnail} className="project-card-main-image" onMouseEnter={handlePitchPlay}/> }
      { textContent.timeFrame && <h2>{textContent.timeFrame}</h2> }
      { textContent.tags && 
        <>
          <h2>Skills:</h2>
          <div className="project-tag-container">
            {textContent.tags.map((tag) => (
              <ProjectTag label={tag}/>
            ))}
          </div>
        </>
      }
      <button className="project-open-button" onMouseEnter={handlePitchPlay} onClick={() => {setIsOpen(!isOpen)}}>
        {isOpen ? 'Close Project' : 'Explore Project'}
      </button>

      <div className={`project-card-content ${isOpen ? 'open' : ''}`}>
        <h2>About</h2>
        <p>{textContent.description}</p>
        <p>{textContent.efforts}</p>
        { textContent.video && 
          <>
            <h2>Video</h2> 
            <iframe className="project-card-video" src={textContent.video}/> 
          </>
        }

        { pictures &&
          <>
            <h2>Images</h2>
            <ImageCarousel pictures={pictures}/> 
          </> 
        }
        { textContent.projectLink &&
          <a className="project-link" href={textContent.projectLink} onMouseEnter={handlePitchPlay}>Link to Project</a>
        }
        <button className="project-open-button" onMouseEnter={handlePitchPlay} onClick={() => {setIsOpen(!isOpen)}}>
          {isOpen ? 'Close Project' : 'Explore Project'}
        </button>
      </div>
    </div>
  )
}

export default ProjectCard;