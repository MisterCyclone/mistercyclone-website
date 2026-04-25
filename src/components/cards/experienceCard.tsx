import React from "react";
import './experienceCard.css'
import usePlaySoundPitched from "../../hooks/usePlaySoundPitched";

interface ExperienceCardProps {
  role?: string;
  place?: string;
  timeframe?: string;
  description?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({role, place, timeframe, description}) => {
  const { playPitchByType } = usePlaySoundPitched();

  return (
    <div className="experience-card" onMouseEnter={() => playPitchByType('card')}>
      <h2>{role}</h2>
      <h3 className="experience-card-titles">{place}</h3>
      <p className="experience-card-titles" style={{fontStyle: "italic"}}>{timeframe}</p>
      <p>{description}</p>
    </div>
  )
}

export default ExperienceCard