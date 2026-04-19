import React from "react"

interface ButtonProps {
  label: string;
}

const NavButton: React.FC<ButtonProps> = ({label}) => {

  return(
    <button>{label}</button>
  )
}

export default NavButton