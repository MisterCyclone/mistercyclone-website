import React from "react";
import HomeCard from "../../components/cards/homeCard";
import homeContent from '../../website-content/home.json'
import LinkCard from "../../components/cards/linkCard";
import './homePage.css'

const HomePage: React.FC = () => {
  
  return (
    <div className="homepage-container">
      <h1 className="home-title">Welcome!</h1>
      <div className="home-container">
        <HomeCard {...homeContent["about-me"]}/>
        <HomeCard {...homeContent.projects}/>
        <HomeCard {...homeContent.experience}/>
      </div>
      <h1 className="home-title">Contact Me!</h1>
      <div className="contact-link-container">
        <LinkCard label="GitHub" icon="pi pi-github" href="https://github.com/MisterCyclone"/>
        <LinkCard label="LinkedIn" icon="pi pi-linkedin" href="https://www.linkedin.com/in/alfie-skinner-b86bb4205"/>
        <LinkCard label="Email" icon="pi pi-envelope" href="mailto:alfieskinner@mistercyclone.co.uk"/>
      </div>
    </div>
  );
};

export default HomePage;