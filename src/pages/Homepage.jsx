import { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import ShowCase1 from "../components/ProductShowCases/ShowCase1/ShowCase1.jsx";
import ShowCase2 from "../components/ProductShowCases/ShowCase2/ShowCase2.jsx";

function Homepage() {
  const imgs = [
    "http://localhost:8000/images/product1.jpg",
    "http://localhost:8000/images/product2.jpg",
    "http://localhost:8000/images/product3.jpg",
    "http://localhost:8000/images/product4.jpg",
  ];

  return (
    <>
      <Carousel images={imgs} />
      <ShowCase1 />
      <ShowCase1 />
      <ShowCase2 />
      <ShowCase2 />
      <ShowCase1 />
      <ShowCase2 />
      <div>产品展示3</div>
    </>
  );
}

export default Homepage;
