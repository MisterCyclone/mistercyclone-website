import React from "react"
import './header.css'
import NavBar from "./nav-bar"

const Header: React.FC = () => {

  return (
    <header>
      <h1>Alfie Skinner</h1>
      <NavBar links={[
        {label: "Home", routeTo: "/"},
        {label: "About", routeTo: "/about"}, 
        {label: "Projects", routeTo: "/projects"}, 
        {label: "Experience", routeTo: "/experience"},
        {label: "Contact", routeTo: "/contact"},
      ]}/>
    </header>
  )
}

export default Header