import React from "react";

import { useState } from "react";
import './imageCarousel.css'

import usePlaySound  from "../../hooks/usePlaySound";

interface ImageCarouselProps {
  pictures: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ pictures }) => {

  const { playByType } = usePlaySound();

  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const carouselControl = (direction: number) => {
    if ((carouselIndex + direction) === -1 ) {setCarouselIndex(pictures.length-1); return;}
    if ((carouselIndex + direction) === pictures.length ) {setCarouselIndex(0); return;}
    setCarouselIndex(carouselIndex+direction);
  }

  return (
    <div className="carousel-container">
      <button className="arrow arrow-left" onMouseEnter={() =>  playByType('clickable')} onClick={() => {carouselControl(-1); playByType('click')}}>{"<"}</button>
      <div className="carousel-display" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
        {pictures.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} className="carousel-image"/>
          </div>
        ))}
      </div>
      <button className="arrow arrow-right" onMouseEnter={() =>  playByType('clickable')} onClick={() => {carouselControl(1); playByType('click')}}>{">"}</button>
    </div>
  )
}

export default ImageCarousel;