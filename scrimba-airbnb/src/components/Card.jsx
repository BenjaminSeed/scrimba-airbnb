import "../styles/Card.css";
import swimmer from "../assets/image 12.png";
import star from "../assets/Star 1.png";

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <div className="card">
      <img src={img} className="card--img" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) • </span>
        <span className="grey">{country}</span>
      </div>
      <p>{title}</p>
      <p>
        {" "}
        <span className="bold">From ${price}</span> / Person
      </p>
    </div>
  );
};

export default Card;
