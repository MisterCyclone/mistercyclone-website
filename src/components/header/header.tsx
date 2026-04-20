import React from "react"
import NavBar from "./nav-bar"

const Header: React.FC = () => {

  return (
    <header>
      <h1>MisterCyclone</h1>
      <NavBar links={[
        {label: "Home", routeTo: "/"}, 
        {label: "Projects", routeTo: "/projects"}, 
        {label: "Blog", routeTo: "/blog"},
        {label: "Contact", routeTo: "/contact"},
      ]}/>
    </header>
  )
}

export default Header