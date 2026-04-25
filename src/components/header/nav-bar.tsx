import React from "react"
import './header.css'
import { NavLink } from "react-router-dom"
import usePlaySoundPitched from "../../hooks/usePlaySoundPitched";
import usePlaySound from "../../hooks/usePlaySound";

interface NavBarProps {
  links : {
    label: string;
    routeTo: string; 
  }[];
}

const NavBar: React.FC<NavBarProps> = ({links}) => {
  const { playPitchByType } = usePlaySoundPitched();
  const { playByType } = usePlaySound();
  
  return (
    <div className="nav-bar">
      {links.map((link) => (
        <NavLink className="nav-bar-button" key={link.routeTo} onClick={() => playByType('click')} onMouseEnter={() => playPitchByType('nav-button')} to={link.routeTo}>{link.label}</NavLink>
      ))}
    </div>
  )
}

export default NavBar