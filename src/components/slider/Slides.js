import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Project 1",
    desc: "Proyecto MelozzyFeria",
  },
  
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href="https://codesandbox.io/s/github/nicocapell/ReactJS-Store" ><img src={slide.src} alt={slide.alt} /></a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;