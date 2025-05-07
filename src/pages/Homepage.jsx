import { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";

function Homepage() {
  // const [imgs, setImgs] = useState([]);
  // useEffect(() => {
  //   const fetchImgs = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/images/product1.jpg");
  //       setImgs([res]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchImgs();
  // }, []);
  const imgs = [
    "http://localhost:8000/images/product1.jpg",
    "http://localhost:8000/images/product2.jpg",
    "http://localhost:8000/images/product3.jpg",
    "http://localhost:8000/images/product4.jpg",
  ];

  return (
    <>
      <Carousel images={imgs} />
      <div>产品展示1</div>
      <div>产品展示2</div>
      <div>产品展示2</div>
      <div>产品展示3</div>
      <div>产品展示2</div>
      <div>产品展示4</div>
    </>
  );
}

export default Homepage;
