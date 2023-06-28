import "../styles/Card.css";
import star from "../assets/Star 1.png";

const Card = ({
  coverImg,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) => {
  return (
    <div className="card">
      <img src={coverImg} className="card--img" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) • </span>
        <span className="grey">{location}</span>
      </div>
      <p>{title}</p>
      <p>
        {" "}
        <span className="bold">From ${price}</span> / Person
      </p>
      <p>Available Spaces: {openSpots}</p>
    </div>
  );
};

export default Card;
