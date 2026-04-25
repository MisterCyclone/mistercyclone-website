import React from "react";
import './homeCard.css'

import usePlaySound from "../../hooks/usePlaySound";
import usePlaySoundPitched from "../../hooks/usePlaySoundPitched";

import { NavLink } from "react-router-dom"

interface HomeCardProps {
  pageName?: string;
  routeTo: string; 
  description?: string;
}

const HomeCard: React.FC<HomeCardProps> = ({pageName, routeTo, description}) => {

  const { playByType } = usePlaySound();
  const { playPitchByType } = usePlaySoundPitched();

  return (
    <NavLink className="home-card" to={routeTo} onMouseEnter={() => {playPitchByType('card')}} onClick={() => {playByType('click')}}>
      <h1>{pageName}</h1>
      <p>{description}</p>
    </NavLink>
  )
}

export default HomeCard;