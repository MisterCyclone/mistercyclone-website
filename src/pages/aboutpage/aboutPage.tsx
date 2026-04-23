import React from "react";

import { useState } from "react";
import useSound from "use-sound";
import onImageEnter from '../../assets/onImageEnterwav.wav'

import aboutContent from '../../website-content/about.json'
import selfPicture from '../../assets/thumbnail.jpg'
import dogPicture from '../../assets/dogPicture.jpg'
import catPicture from '../../assets/catPicture.jpg'
import './aboutPage.css'

const titleSection = aboutContent["about-me"];


const AboutPage: React.FC = () => {
  
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
    <div className="container">
      <h1 className="title">{titleSection.title}</h1>
      <div className="about-me-pictures-container">
        <img className="about-me-picture" src={dogPicture} onMouseEnter={handlePitchPlay}/>
        <img className="about-me-picture" src={selfPicture}onMouseEnter={handlePitchPlay}/>
        <img className="about-me-picture" src={catPicture} onMouseEnter={handlePitchPlay}/>
      </div>
        <div className="about-me-container">
        <p className="about-me-text">{titleSection.description}</p>
        <ul>
          {titleSection.currentProjects.map((project) => (
            <li className="about-me-text-point">{project}</li>
          ))}
        </ul>
        <p className="about-me-text">{titleSection.descriptionTwo}</p>
      </div>
    </div>
  );
};

export default AboutPage;