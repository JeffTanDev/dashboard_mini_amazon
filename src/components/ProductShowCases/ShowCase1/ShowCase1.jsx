import Card from "../../Card/Card.jsx";
import "./ShowCase1.css";
function ShowCase1() {
  const cards = [
    "http://localhost:8000/images/images/card1-1.jpg",
    "http://localhost:8000/images/images/card1-2.jpg",
    "http://localhost:8000/images/images/card1-3.jpg",
    "http://localhost:8000/images/images/card1-4.jpg",
  ];
  return (
    <div className="showcase1">
      <Card cards={cards} />
      <Card cards={cards} />
      <Card cards={cards} />
      <Card cards={cards} />
    </div>
  );
}

export default ShowCase1;
