import Card from "../../Card/Card.jsx";
import "./ShowCase1.css";
function ShowCase1({ images }) {
  const cards1 = images.slice(0, 4);
  const cards2 = images.slice(4, 8);
  const cards3 = images.slice(8, 12);
  const cards4 = images.slice(12, 16);
  return (
    <div className="showcase1">
      <Card cards={cards1} />
      <Card cards={cards2} />
      <Card cards={cards3} />
      <Card cards={cards4} />
    </div>
  );
}

export default ShowCase1;
