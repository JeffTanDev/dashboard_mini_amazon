import "./ProductCard.css";

function ProductCard({ product }) {
  const { title, price, rating, image, reviews } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>
              ★
            </span>
          ))}
          <span className="reviews-count">({reviews} reviews)</span>
        </div>
        <div className="product-price">
          <span className="price">${price}</span>
          <span className="prime-badge">Prime</span>
        </div>
        <div className="delivery-info">
          <span className="delivery-date">estimated delivery date: 3-5 days</span>
          <span className="free-delivery">free delivery</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 