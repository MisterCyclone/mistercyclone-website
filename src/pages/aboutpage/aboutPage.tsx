import React from "react";
import usePlaySoundPitched  from "../../hooks/usePlaySoundPitched";
import aboutContent from '../../website-content/about.json'
import './aboutPage.css'
import aboutAssets  from '../../assets/about/about_index.ts'

const titleSection = aboutContent["about-me"];

const AboutPage: React.FC = () => {

  const { playPitchByType } = usePlaySoundPitched();

  return (
    <div className="container">
      <h1 className="title">{titleSection.title}</h1>
      <div className="about-me-pictures-container">
        <img className="about-me-picture" src={aboutAssets.aboutPictureOne} onMouseEnter={() => playPitchByType('clickable')}/>
        <img className="about-me-picture" src={aboutAssets.aboutPictureTwo} onMouseEnter={() => playPitchByType('clickable')}/>
        <img className="about-me-picture" src={aboutAssets.aboutPictureThree} onMouseEnter={() => playPitchByType('clickable')}/>
      </div>
      <div className="about-me-container">
        <p className="about-me-text">{titleSection.description}</p>
        <ul>
          {titleSection.currentProjects.map((project) => (
            <li className="about-me-text-point" key={project}>{project}</li>
          ))}
        </ul>
        <p className="about-me-text">{titleSection.descriptionTwo}</p>
      </div>
    </div>
  );
};

export default AboutPage;