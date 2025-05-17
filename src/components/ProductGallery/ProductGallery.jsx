import React, { useEffect, useState } from "react";
import "./ProductGallery.css";

function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  useEffect(() => {
    if (images && images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);
  return (
    <div className="product-gallery-vertical">
      <div className="thumbnail-column">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`thumbnail-vertical ${
              mainImage === img ? "active" : ""
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      <div className="main-image-container-vertical">
        <img
          src={mainImage}
          alt="Main Product"
          className="main-image-vertical"
        />
      </div>
    </div>
  );
}

export default ProductGallery;
