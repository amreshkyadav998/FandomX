import React, { useState, useEffect } from "react";
import "./custom.slider.css";

function CustomCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, children.length]);

  const slideToIndex = (index) => {
    setActiveIndex(index);
    setAutoPlay(false); // Pausing autoplay on manual navigation
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const slidePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container__slider"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {children.map((item, index) => (
        <div
          className={`slider__item ${activeIndex === index ? "slider__item-active" : ""}`}
          key={index}
        >
          {item}
        </div>
      ))}

      <div className="container__slider__links">
        {children.map((_, index) => (
          <button
            key={index}
            className={`container__slider__links-small ${
              activeIndex === index ? "container__slider__links-small-active" : ""
            }`}
            onClick={() => slideToIndex(index)}
          ></button>
        ))}
      </div>

      <button className="slider__btn-next" onClick={slideNext}>
        {">"}
      </button>
      <button className="slider__btn-prev" onClick={slidePrev}>
        {"<"}
      </button>
    </div>
  );
}

export default CustomCarousel;
