import "../styles/Card.css";
import star from "../assets/Star 1.png";

const Card = ({
  coverImg,
  stats: { rating, reviewCount },
  location,
  title,
  price,
  openSpots,
}) => {
  console.log(rating, reviewCount);
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={coverImg} className="card--img" />
      <div className="card--stats">
        <img src={star} alt="" className="card--star" />
        <span>{rating}</span>
        <span className="grey">({reviewCount}) • </span>
        <span className="grey">{location}</span>
      </div>
      <p className="card--title">{title}</p>
      <p>
        {" "}
        <span className="card--price">From ${price}</span> / Person
      </p>
    </div>
  );
};

export default Card;
