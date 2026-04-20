import React from "react"
import { NavLink } from "react-router-dom"

interface NavBarProps {
  links : {
    label: string;
    routeTo: string; 
  }[];
}

const NavBar: React.FC<NavBarProps> = ({links}) => {

  return (
    <div className="nav-bar">
      {links.map((link) => (
        <NavLink className="nav-bar-button" to={link.routeTo}>{link.label}</NavLink>
      ))}
    </div>
  )
}

export default NavBar