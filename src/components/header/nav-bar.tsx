import React from "react"
import './header.css'
import { useState } from "react";
import { NavLink } from "react-router-dom"
import useSound from "use-sound";
import onNavButtonEnter from '../../assets/onNavButtonEnter.wav'
import onNavButtonClick from '../../assets/onNavButtonClicked.wav'

interface NavBarProps {
  links : {
    label: string;
    routeTo: string; 
  }[];
}

const NavBar: React.FC<NavBarProps> = ({links}) => {

  const [randomPitch, setRandomPitch] = useState<number>(1);

  const [play] = useSound(onNavButtonEnter, {
    playbackRate: randomPitch
  });

  const [click] = useSound(onNavButtonClick);
  
  const handlePitchPlay = () => {
    setRandomPitch(Number.parseFloat(((Math.random() * (1.1 - 0.9) + 0.9)).toFixed(1)));
    console.log(randomPitch)
    play();
  }
  
  return (
    <div className="nav-bar">
      {links.map((link) => (
        <NavLink className="nav-bar-button" onClick={() => click()} onMouseEnter={handlePitchPlay} to={link.routeTo}>{link.label}</NavLink>
      ))}
    </div>
  )
}

export default NavBar