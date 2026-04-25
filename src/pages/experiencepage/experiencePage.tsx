import React from "react";
import './experiencePage.css'

import usePlaySoundPitched  from "../../hooks/usePlaySoundPitched";

import ExperienceCard from "../../components/cards/experienceCard";
import EducationCard from "../../components/cards/educationCard";

import experienceContent from '../../website-content/experience.json'
import educationContent from '../../website-content/education.json'

const ExperiencePage: React.FC = () => {
  const { playPitchByType } = usePlaySoundPitched();
  
  return (
    <div className="container">
      <h1 className="title">Experience</h1>
      <div className="experience-container" >
        <ExperienceCard {...experienceContent['Linces Softco Limited']}/>
        <ExperienceCard {...experienceContent['The JT Group']}/>
        <ExperienceCard {...experienceContent['Willowbank']}/>
        <ExperienceCard {...experienceContent['Cherrytree']}/>
      </div>
      <h1 className="title">Education</h1>
      <div className="education-container"  onMouseEnter={() => playPitchByType('card')}>
        <EducationCard {...educationContent['csDegree']}/>
        <EducationCard {...educationContent['gamesDegree']}/>
      </div>
    </div>
  );
};

export default ExperiencePage;