import React from "react";
import './experienceCard.css'
import { useState } from "react";
import useSound from "use-sound";
import onCardEnter from '../../assets/onCardEnter.wav'

interface ExperienceCardProps {
  role?: string;
  place?: string;
  timeframe?: string;
  description?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({role, place, timeframe, description}) => {

  const [randomPitch, setRandomPitch] = useState<number>(1);

  const [play] = useSound(onCardEnter, {
    playbackRate: randomPitch
  });
  
  const handlePitchPlay = () => {
    setRandomPitch(Number.parseFloat(((Math.random() * (1.1 - 0.9) + 0.9)).toFixed(1)));
    play();
  }

  return (
    <div className="experience-card" onMouseEnter={handlePitchPlay}>
      <h2>{role}</h2>
      <h3 className="experience-card-titles">{place}</h3>
      <p className="experience-card-titles" style={{fontStyle: "italic"}}>{timeframe}</p>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceCard