import React from "react"
import NavButton from "./nav-button"

const NavBar: React.FC = () => {

  return (
    <div className="nav-bar">
      <NavButton label="Home"/>
      <NavButton label="Projects"/>
      <NavButton label="Blog"/>
      <NavButton label="Contact"/>
    </div>
  )
}

export default NavBar