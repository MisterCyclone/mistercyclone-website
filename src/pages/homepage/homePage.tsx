import React from "react";
import HomeCard from "../../components/cards/homeCard";
import homeContent from '../../website-content/home.json'
import './homePage.css'

const aboutCard = homeContent["about-me"];
const projectCard = homeContent.projects
const experienceCard = homeContent.experience
const contactCard = homeContent.contact;

const HomePage: React.FC = () => {
  
  return (
    <div className="homepage-container ">
      <h1 className="title">Welcome to your worst nightmare</h1>
      <div className="home-container">
        <HomeCard {...aboutCard}/>
        <HomeCard {...projectCard}/>
        <HomeCard {...experienceCard}/>
        <HomeCard {...contactCard}/>
      </div>
    </div>
  );
};

export default HomePage;