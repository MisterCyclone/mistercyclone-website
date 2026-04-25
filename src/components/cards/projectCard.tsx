import React from "react";
import ProjectTag from "../multiples/project-tag";
import './projectCard.css'

import { useState } from "react";

import ImageCarousel from "../imageCarousel/imageCarousel";
import usePlaySoundPitched  from "../../hooks/usePlaySoundPitched";
import usePlaySound  from "../../hooks/usePlaySound";

interface ProjectCardTextProps {
  title?: string;
  timeFrame?: string;
  description?: string;
  efforts?: string;
  ytVideo?: string;
  tags?: string[];
  projectLink?: string;
}

interface ProjectCardProps {
  textContent?: ProjectCardTextProps;
  thumbnail?: string;
  pictures?: string[];
  video?: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({textContent, thumbnail, pictures, video}) => {

  const [isOpen, setIsOpen] = useState(false);
  const { playPitchByType } = usePlaySoundPitched();
  const { playByType } = usePlaySound();

  return (
    <div className='project-card'>
      { textContent.title && <h1>{textContent.title}</h1>}
      { thumbnail && <img src={thumbnail} className="project-card-main-image" onMouseEnter={() => playPitchByType('clickable')}/> }
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
      <button className="project-open-button" onMouseEnter={() => playByType('clickable')} onClick={() => {setIsOpen(!isOpen); playByType('click') } }>
        {isOpen ? 'Close Project' : 'Explore Project'}
      </button>

      <div className={`project-card-content ${isOpen ? 'open' : ''}`}>
        <h2>About</h2>
        <p>{textContent.description}</p>
        <p>{textContent.efforts}</p>
        { textContent.ytVideo && 
          <>
            <h2>Video</h2> 
            <iframe className="project-card-video" src={textContent.ytVideo}/> 
          </>
        }
        { video && 
          <>
            <h2>Video</h2> 
            <video className="project-card-video" src={video} controls>
              <source src={video} type="video/mp4"/>
            </video> 
          </>
        }

        { pictures &&
          <>
            <h2>Images</h2>
            <ImageCarousel pictures={pictures}/> 
          </> 
        }
        { textContent.projectLink &&
          <a className="project-link" href={textContent.projectLink} target='_blank' rel='noopener noreferrer' onMouseEnter={() => playByType('clickable')}>Link to Project</a>
        }
        <button className="project-open-button" onMouseEnter={() => playByType('clickable')} onClick={() => {setIsOpen(!isOpen)}}>
          {isOpen ? 'Close Project' : 'Explore Project'}
        </button>
      </div>
    </div>
  )
}

export default ProjectCard;