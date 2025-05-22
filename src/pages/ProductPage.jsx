import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails.jsx";
import ProductGallery from "../components/ProductGallery/ProductGallery.jsx";
import PurchaseBox from "../components/PurchaseBox/PurchaseBox.jsx";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const CONTENT_SERVICE_URL = import.meta.env.VITE_CONTENT_SERVICE_URL;

function ProductPage() {
  const { productID } = useParams();
  const [mockImages, setMockImages] = useState([]);
  const [productInfo, setProductInfo] = useState();
  useEffect(() => {
    const getCarouselImgs = async () => {
      const res = await fetch(
        `${CONTENT_SERVICE_URL}/ProductService/images/${productID}`
      );
      const data = await res.json();
      const fullURL = data.map((url) => {
        return `${CONTENT_SERVICE_URL}/ProductService/${url}`;
      });
      setMockImages(fullURL);
      setProductInfo((prevInfo) => ({
        ...prevInfo,
        image: fullURL[0],
      }));
    };
    const getProductInfo = async () => {
      const res = await axios.get(
        `${CONTENT_SERVICE_URL}/ProductService/getProduct/${productID}`
      );
      setProductInfo(res.data);
    };
    getProductInfo();

    getCarouselImgs();
  }, [productID]);

  return (
    <div className="product-page">
      <ProductGallery images={mockImages} />
      <ProductDetails productInfo={productInfo} />
      <PurchaseBox productInfo={productInfo} />
    </div>
  );
}
export default ProductPage;
