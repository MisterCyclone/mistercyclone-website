import React from "react";

import { useState } from "react";
import useSound from "use-sound";
import onCardEnter from '../../assets/onCardEnter.wav'

import ExperienceCard from "../../components/cards/experienceCard";
import EducationCard from "../../components/cards/educationCard";
import experienceContent from '../../website-content/experience.json'
import educationContent from '../../website-content/education.json'

const lincesExperience = experienceContent['Linces Softco Limited'];
const jtExperience = experienceContent['The JT Group'];
const willowbankExperience = experienceContent['Willowbank'];
const cherrytreeExcperience = experienceContent['Cherrytree'];

const csEducation = educationContent['csDegree'];
const gamesEducation = educationContent['gamesDegree'];

const ExperiencePage: React.FC = () => {

  const [randomPitch, setRandomPitch] = useState<number>(1);

  const [play] = useSound(onCardEnter, {
    playbackRate: randomPitch
  });
  
  const handlePitchPlay = () => {
    setRandomPitch(Number.parseFloat(((Math.random() * (1.1 - 0.9) + 0.9)).toFixed(1)));
    play();
  }
  
  return (
    <div className="container">
      <h1 className="title">Experience</h1>
      <div className="experience-container" >
        <ExperienceCard {...lincesExperience}/>
        <ExperienceCard {...jtExperience}/>
        <ExperienceCard {...willowbankExperience}/>
        <ExperienceCard {...cherrytreeExcperience}/>
      </div>
      <h1 className="title">Education</h1>
      <div className="education-container"  onMouseEnter={handlePitchPlay}>
        <EducationCard {...csEducation}/>
        <EducationCard {...gamesEducation}/>
      </div>
    </div>
  );
};

export default ExperiencePage;