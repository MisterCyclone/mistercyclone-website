import React from "react";
import './homeCard.css'

import { NavLink } from "react-router-dom"

interface HomeCardProps {
  pageName?: string;
  routeTo: string; 
  description?: string;
}

const HomeCard: React.FC<HomeCardProps> = ({pageName, routeTo, description}) => {

  
  return (
    <NavLink className="home-card" to={routeTo}>
      <h1>{pageName}</h1>
      <p>{description}</p>
    </NavLink>
  )
}

export default HomeCard;