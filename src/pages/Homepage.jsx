import "./Homepage.css";
import Carousel from "../components/Carousel/Carousel";
import ShowCase1 from "../components/ProductShowCases/ShowCase1/ShowCase1.jsx";
import ShowCase2 from "../components/ProductShowCases/ShowCase2/ShowCase2.jsx";
import { useEffect, useState } from "react";

const CONTENT_SERVICE_URL = import.meta.env.VITE_CONTENT_SERVICE_URL;

function Homepage() {
  const [CarouselImgs, SetCarouselImgs] = useState([]);
  const [Showcase1Imgs, SetShowcase1Imgs] = useState([]);
  const [Showcase2Imgs, SetShowcase2Imgs] = useState([]);

  useEffect(() => {
    const getCarouselImgs = async () => {
      const res = await fetch(
        `${CONTENT_SERVICE_URL}/ContentService/images/CarouselImgs`
      );
      const data = await res.json();
      const fullURL = data.map((url) => {
        return `${CONTENT_SERVICE_URL}/ContentService/${url}`;
      });
      SetCarouselImgs(fullURL);
    };

    const getShowCase1Img = async () => {
      const res = await fetch(
        `${CONTENT_SERVICE_URL}/ContentService/images/Showcase1`
      );
      const data = await res.json();
      const fullURL = data.map((url) => {
        return `${CONTENT_SERVICE_URL}/ContentService/${url}`;
      });
      SetShowcase1Imgs(fullURL);
    };

    const getShowCase2Img = async () => {
      const res = await fetch(
        `${CONTENT_SERVICE_URL}/ContentService/images/Showcase2`
      );
      const data = await res.json();
      const fullURL = data.map((url) => {
        return `${CONTENT_SERVICE_URL}/ContentService/${url}`;
      });
      SetShowcase2Imgs(fullURL);
    };

    getCarouselImgs();
    getShowCase1Img();
    getShowCase2Img();
  }, []);

  return (
    <div className="homepage">
      <div className="hero-section">
        <Carousel images={CarouselImgs} />
      </div>
      <div className="empty"></div>
      <div className="showcase-overlay">
        <ShowCase1 images={Showcase1Imgs} />
        <ShowCase1 images={Showcase1Imgs} />
        <ShowCase2 images={Showcase2Imgs} />
        <ShowCase2 images={Showcase2Imgs} />
        <ShowCase1 images={Showcase1Imgs} />
        <ShowCase2 images={Showcase2Imgs} />
      </div>
    </div>
  );
}

export default Homepage;
