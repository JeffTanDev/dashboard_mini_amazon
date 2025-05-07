import "./Card.css";

function Card({ cards }) {
  return (
    <div className="card">
      <h2 className="card-title">Title</h2>
      <div className="card-grid">
        {cards.map((card) => {
          return (
            <div className="card-item">
              <img src={card} alt="" className="card-image" />
              <p className="card-text">Product Name</p>
            </div>
          );
        })}
      </div>
      <a href="#" className="card-store">
        Store Link
      </a>
    </div>
  );
}

export default Card;
