import { useRef } from "react";
import "./ShowCase2.css";

function ShowCase2({ images }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300 });
    } else {
      scrollRef.current.scrollBy({ left: 300 });
    }
  };

  return (
    <div className="showcase-container">
      <h2 className="showcase-title">Title</h2>
      <div className="imgs-wrapper">
        <button
          className="showcase-nav-button left"
          onClick={() => scroll("left")}
        >{`<`}</button>
        <div className="imgs-track" ref={scrollRef}>
          {images.map((image) => {
            return (
              <div className="imgs-item" key={image}>
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
        <button
          className="showcase-nav-button right"
          onClick={() => scroll("right")}
        >{`>`}</button>
      </div>
    </div>
  );
}

export default ShowCase2;
