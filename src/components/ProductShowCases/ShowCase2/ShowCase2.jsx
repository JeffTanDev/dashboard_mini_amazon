import { useRef } from "react";
import "./ShowCase2.css";

function ShowCase2() {
  const products = [
    "http://localhost:8000/images/images/card2-1.jpg",
    "http://localhost:8000/images/images/card2-2.jpg",
    "http://localhost:8000/images/images/card2-3.jpg",
    "http://localhost:8000/images/images/card2-4.jpg",
    "http://localhost:8000/images/images/card3-1.jpg",
    "http://localhost:8000/images/images/card3-2.jpg",
    "http://localhost:8000/images/images/card3-3.jpg",
    "http://localhost:8000/images/images/card3-4.jpg",
    "http://localhost:8000/images/images/card4-1.jpg",
    "http://localhost:8000/images/images/card4-2.jpg",
    "http://localhost:8000/images/images/card4-3.jpg",
    "http://localhost:8000/images/images/card4-4.jpg",
  ];
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
          className="nav-button left"
          onClick={() => scroll("left")}
        >{`<`}</button>
        <div className="imgs-track" ref={scrollRef}>
          {products.map((product) => {
            return (
              <div className="imgs-item">
                <img src={product} alt="" />
              </div>
            );
          })}
        </div>
        <button
          className="nav-button right"
          onClick={() => scroll("right")}
        >{`>`}</button>
      </div>
    </div>
  );
}

export default ShowCase2;
