import React from "react"
import NavBar from "./nav-bar"


const Header: React.FC = () => {

  return (
    <header className="header">
      <h1>MisterCyclone</h1>
      <NavBar/>
    </header>
  )
}

export default Header