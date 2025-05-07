import { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel({ images, interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === images.length ? 0 : prevIndex + 1;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prevImg = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    });
    console.log(currentIndex);
  };

  const nextImg = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
    });
    console.log(currentIndex);
  };

  return (
    <div className="carousel">
      <button onClick={prevImg} className="nav-button">
        {"<"}
      </button>
      <img src={images[currentIndex]} alt={currentIndex} />
      <button onClick={nextImg} className="nav-button">
        {">"}
      </button>
    </div>
  );
}

export default Carousel;
