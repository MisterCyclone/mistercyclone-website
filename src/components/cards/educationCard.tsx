import React from "react";
import './educationCard.css'


interface EducationCardProps {
  degree?: string;
  listItems?: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({degree, listItems}) => {


  return (
    <div className="education-card">
      <h2>{degree}</h2>
      <ul>
        {listItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default EducationCard;