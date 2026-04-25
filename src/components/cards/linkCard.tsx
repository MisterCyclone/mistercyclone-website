import React from "react";
import './linkCard.css'

import usePlaySound from "../../hooks/usePlaySound";
import usePlaySoundPitched from "../../hooks/usePlaySoundPitched";

interface LinkCardProps {
  label: string;
  icon: string;
  href: string;
}

const LinkCard: React.FC<LinkCardProps> = ({label, icon, href}) => {
  
  const { playByType } = usePlaySound();
  const { playPitchByType } = usePlaySoundPitched();

  return (
    <div className="link-card" onMouseEnter={() => {playPitchByType('card')}} onClick={() => {playByType('click')}}>
      <a className="link-card-text" href={href} target='_blank' rel='noopener noreferrer' ><div className={icon}/>{label}</a>
    </div>
  );
}

export default LinkCard;