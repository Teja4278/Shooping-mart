import React, { useState, useEffect } from "react";
import "./Style.css"; // Import styles
import sofaSlide from "../Images/hero-img.png";
import phone08 from "../Images/phone-08.png";
import wireless01 from "../Images/wireless-01.png";
import watchSlide from "../Images/watch-07.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const SliderData = [
    {
        id: 1,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: sofaSlide,
    },
    {
        id: 2,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: phone08,
    },
    {
        id: 3,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: wireless01,
    },
    {
        id: 4,
        title: "50% Off For Your First Shopping",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
        cover: watchSlide,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SliderData.length) % SliderData.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        {/* Left Content */}
        <div className="carousel-text">
          <h1>{SliderData[currentIndex].title}</h1>
          <p>{SliderData[currentIndex].desc}</p>
        </div>

        {/* Right Content */}
        <div className="carousel-image">
          <img src={SliderData[currentIndex].cover} alt={SliderData[currentIndex].title} />
        </div>
      </div>

    {/* Navigation Buttons  */}
       <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
