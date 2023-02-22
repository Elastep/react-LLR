import HeroImage from "../../assets/food/food5.jpeg";
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Confirmed!</h1>
        <h4>Email sent!</h4>
        <h4>Thanks!</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
