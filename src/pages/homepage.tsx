import React from "react";
import ExperienceCard from "../components/cards/experienceCards/experienceCard";
import EducationCard from "../components/cards/educationCards/educationCard";
import experienceContent from '../website-content/experience.json'
import educationContent from '../website-content/education.json'

const lincesExperience = experienceContent['Linces Softco Limited'];
const jtExperience = experienceContent['The JT Group'];
const willowbankExperience = experienceContent['Willowbank'];
const cherrytreeExcperience = experienceContent['Cherrytree'];

const csEducation = educationContent['csDegree'];
const gamesEducation = educationContent['gamesDegree'];

const HomePage: React.FC = () => {
  
  return (
    <div className="container">
      <h1>Experience</h1>
      <div className="experience-container">
        <ExperienceCard {...lincesExperience}/>
        <ExperienceCard {...jtExperience}/>
        <ExperienceCard {...willowbankExperience}/>
        <ExperienceCard {...cherrytreeExcperience}/>
      </div>
      <h1>Education</h1>
      <div className="education-container">
        <EducationCard {...csEducation}/>
        <EducationCard {...gamesEducation}/>
      </div>
    </div>
  );
};

export default HomePage;