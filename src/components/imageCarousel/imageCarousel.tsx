import React from "react";

import { useState } from "react";
import './imageCarousel.css'

interface ImageCarouselProps {
  pictures: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ pictures }) => {

  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const carouselControl = (direction: number) => {
    if ((carouselIndex + direction) === -1 ) {setCarouselIndex(pictures.length-1); return;}
    if ((carouselIndex + direction) === pictures.length ) {setCarouselIndex(0); return;}
    setCarouselIndex(carouselIndex+direction);
  }

  return (
    <div className="carousel-container">
      <button className="arrow arrow-left" onClick={() => carouselControl(-1)}>{"<"}</button>
      <div className="carousel-display" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
        {pictures.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} className="carousel-image"/>
          </div>
        ))}
      </div>
      <button className="arrow arrow-right" onClick={() => carouselControl(1)}>{">"}</button>
    </div>
  )
}

export default ImageCarousel;