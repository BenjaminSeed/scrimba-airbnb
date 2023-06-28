import image from "../assets/airbnb 1.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <img src={image} className="nav--img"></img>
    </nav>
  );
};

export default Navbar;
